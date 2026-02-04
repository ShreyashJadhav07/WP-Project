import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";


const AuthContext=React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}

function AuthWrapper({children}){
    const [userData,setUserData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,async (currentUser)=>{
            setLoading(true);
            if(currentUser){
                const docRef=doc(db,"users",currentUser?.uid);
                const docSnap=await getDoc(docRef);
                if(docSnap.exists()){
                    const {profile_pic, name, email,lastSeen,status}= docSnap.data();
                    await setLastSeen(currentUser);
                    setUserData({
                      id: currentUser.uid,
                      profile_pic,
                      email,
                      name,
                      lastSeen,
                      status: status ? status : ""
                       
                    });
                    
                }
            }
            setLoading(false);
        })
        return () =>{
            unsubscribe()
        }
    }, [])
    const setLastSeen = async (user) =>{
        const date=new Date();
        const timeStamp=date.toLocaleString("en-US",{
            hour:'numeric',
            minute:'numeric',
            hour12:true,
            day:"2-digit",
            month:'short'
            
            
        });
        await updateDoc(doc(db,'users',user.uid),{
            lastSeen:timeStamp,
        }
    )

    }

    const updateName= async (newName) =>{
        try{
            await updateDoc(doc(db,"users" ,userData.id),{
                name:newName
            });
            setUserData(prev => ({
                ...prev,
                name: newName
            }));
        }catch(err){
            setError(err.message);
        }

    }
    const updateStatus= async (newstatus) =>{
        try{
            await updateDoc(doc(db,"users" ,userData.id),{
                status:newstatus
            });
            setUserData(prev => ({
                ...prev,
                status: newstatus
            }));
        }catch(err){
            setError(err.message);
        }

    }

    // photo upload removed


    return <AuthContext.Provider value={{setUserData,userData,loading,updateName,updateStatus,error}}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper;