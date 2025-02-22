import { arrayUnion, deleteDoc, doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { EllipsisVerticalIcon, MessageSquareText, PlusIcon, SendIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { useAuth } from './AuthContext';

function ChatWindow() {
  const params = useParams();
  const [secondUser, setSecondUser] = useState();
  const [msg, setMsg] = useState("");
  const receiverId = params.chatid;
  const [msgList, setMsgList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const {userData} =useAuth();

  
  const chatId =
    userData?.id > receiverId
      ? `${userData.id}-${receiverId}`
      : `${receiverId}-${userData?.id}`;

      const menuRef = useRef(null);

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", receiverId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSecondUser(docSnap.data());
      }
    };

    const msgUnsubscribe = onSnapshot(doc(db, "user-chats", chatId), (doc) => {
      setMsgList(doc.data()?.messages || []);
    });

    getUser();

    return () => {
      msgUnsubscribe();
    };
  }, [receiverId]);


  const handleDeleteChat = async() => {

    if (!chatId) {
      console.error("Chat ID is undefined");
      return;
    }
    try {
      const chatDocRef = doc(db, 'user-chats', chatId);
      const chatSnapshot = await getDoc(chatDocRef);
  
   
      if (!chatSnapshot.exists()) {
        console.log("Chat does not exist");
        setShowMenu(false);
        return
      }
  
     
      await deleteDoc(chatDocRef);
      setShowMenu(false);
      
      setTimeout(() => navigate("/"), 200);

      console.log("Chat successfully deleted");
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  }

  const navigate = useNavigate();
   useEffect(() => {
            const handlePopState = () => {
              navigate('/');
            };
          
            window.addEventListener('popstate', handlePopState);
            return () => {
              window.removeEventListener('popstate', handlePopState); 
            };
          }, []);
  
  
  const sendMsg = async () => {
   
    if (msg) {
      const date = new Date();
      const timeStamp = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      if (msgList?.length === 0) {
       
        await setDoc(doc(db, "user-chats", chatId), {
          chatId: chatId,
          messages: [
            {
              text: msg,
              time: timeStamp,
              sender: userData.id,
              receiver: receiverId,
            },
          ],
        });
      } else {
        console.log(msg, timeStamp, userData.id, "seocndUser", secondUser)

        await updateDoc(doc(db, "user-chats", chatId), {
          chatId: chatId,
        
          messages: arrayUnion({
            text: msg,
            time: timeStamp,
            sender: userData.id,
            receiver: receiverId,
          }),
        });
      }
      setMsg("");
    }
  };



 
  if (!receiverId)
    return (
      <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
        <MessageSquareText
          className="w-28 h-28 text-gray-400"
          strokeWidth={1.2}
        />
        <p className="text-sm text-center text-gray-400">
          select any contact to
          <br />
          start a chat with.
        </p>
      </section>
    );

  return <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
    <div className="h-full w-full  bg-[#F2EFE9] flex flex-col">
      {/* Top bar */}
      <div className="bg-[#eff2f5] py-2 px-4 flex items-center gap-2 shadow-sm">
        <img
          src={secondUser?.profile_pic || "/default-user.png"}
          alt="profile picture"
          className="w-9 h-9 rounded-full object-cover"
        />
        <div >
          <h3>{secondUser?.name}</h3>
          {secondUser?.lastSeen && (
            <p className="text-xs text-neutral-400">
              last seen at {secondUser?.lastSeen}
            </p>
          )}
       </div>

       <div className='ml-auto cursor-pointer relative'>
          <EllipsisVerticalIcon 
            className="text-gray-600" 
            size={20} 
            onClick={(e) => { e.stopPropagation(); 
                setShowMenu(!showMenu);}}
          />
          {showMenu && (
            <div ref={menuRef} className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-10">
              <button
                onClick={handleDeleteChat}
                className="text-red-600 hover:bg-gray-100 w-full text-left py-2 px-4 rounded-md transition-all duration-200"
              >
                Delete Chat
              </button>
            </div>
          )}
        </div>
      </div>


     
      <div className="flex-grow flex flex-col gap-12 p-6 overflow-y-scroll">
      
      

        {msgList?.map((m, index) => (
          <div
            key={index}
            data-sender={m.sender === userData.id}
           
            className={`bg-white  w-fit rounded-md p-2 shadow-sm max-w-[400px] break-words data-[sender=true]:ml-auto data-[sender=true]:bg-[#D9FDD2] `}
          >
            <p>{m?.text}</p>
            <p className="text-xs text-neutral-500  text-end">
              {m?.time}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-[#eff2f5] py-3 px-6 shadow flex items-center gap-6">
        <PlusIcon />
        <input
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMsg();
            }
          }}
          className="w-full py-2 px-4 rounded  focus:outline-none"
          placeholder="Type a message..."
        />
        <button  onClick={sendMsg}>
          <SendIcon />
        </button>
      </div>
    </div>

  </section>
}

export default ChatWindow
