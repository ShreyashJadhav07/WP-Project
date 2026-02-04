import React from 'react'
import { Fingerprint } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';


async function createUser(authData){
   
 
    const userObject=authData.user;
    const {uid , photoURL, displayName, email}=userObject;
    const date=new Date();
    const timeStamp=date.toLocaleString("en-US", {
        hour:'numeric',
        minute:'numeric',
        hour12:true,
    });

    await setDoc(doc(db, "users" , uid),{
        email,
        profile_pic: photoURL,
        name: displayName,
        lastSeen:timeStamp,
       
    })



}

function Login() {
    const navigate=useNavigate();
    
    const handleLogin= async () => {
        const userData= await signInWithPopup(auth, new GoogleAuthProvider());
      
        await createUser(userData);
        navigate("/");
        
     
        
    }
  return (
    <>
    <div className='h-[200px] bg-[#04a784]'>

        <div className='flex ml-[200px] pt-10 items-center gap-4'>
      
        <img src="/whatsapp.svg" alt='WhatsApp Logo' className='h-8' />
        <div className='text-white uppercase font-medium'>WhatsApp</div>

        </div>
       
    </div>
    <div className='h-[calc(100vh-200px)] bg-[#eff2f5] flex justify-center items-center relative'>
                
                <div className='h-[80%] w-full max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col gap-4 justify-center items-center mx-auto absolute left-0 right-0 -top-[60px]'>
                <Fingerprint className='h-20 w-20 text-[#04a784]' strokeWidth={1}/>
               
                    <div className='text-2xl font-medium mb-2'>Sign In</div>
                    <div className='text-xs font-light text-slate-500 text-center'>Sign in with your google account<br />to get started.</div>
                    <button className='flex gap-2 items-center bg-[#04a784] p-4 text-white rounded-[5px]' onClick={handleLogin}>
                        <div>
                            Sign in with Google
                        </div>
                        <LogIn />
                    </button>
        
        
                </div>
            </div>
  
    </>
  
  )
}

export default Login
