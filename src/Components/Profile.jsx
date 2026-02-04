import { ArrowLeft, CheckIcon, Edit2Icon, Loader2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Profile(props) {
  const navigate=useNavigate();
  const {userData,updateName,updateStatus,error} =useAuth();
  const [name,setName]=useState(userData?.name|| "");
  const [status,setStatus]=useState(userData?.status || "");

  useEffect(() => {
    setName(userData?.name || "");
    setStatus(userData?.status || "");
  }, [userData]);
  const handleLogout=() => {
    signOut(auth);
    navigate("/login")
    

  }
  return (
    <div className='bg-[#eff2f5] w-full sm:w-11/12 md:w-1/2 lg:w-1/3 min-w-0 h-full '>
       <div className='bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6'>
            <button onClick={props.onBack}>
                <ArrowLeft/>
            </button>
            <div>profile</div>
        </div>

        <div className='flex flex-col items-center justify-center gap-8 mt-4 py-16 w-full'>
          <div className="rounded-full overflow-hidden w-[160px] h-[160px]">
            <img src={userData?.profile_pic || '/default-user.png'} alt='profile-picture' className='w-[160px] h-[160px] object-cover rounded-full' /> 
          </div>

     
       {error && <p className='text-red-500'>{error}</p>}
        
        {/* <h2>{userData.name}</h2> */}
        <div className='flex flex-col bg-white w-full py-4 px-8'>
          <label className='text-sm text-[#008069] mb-2'>Your name</label>
          <div className='flex items-center w-full'>
            <input value={name} className='w-full bg-transparent' placeholder='Update your name...'
            onChange={(e) =>{
              setName(e.target.value);
            }}
            />
            <button onClick={() => updateName(name)}><CheckIcon className='w-5 h-5'/></button>
          
          </div>
        </div>

        <div className='flex flex-col bg-white w-full py-4 px-8'>
          <label className='text-sm text-[#008069] mb-2'>Status</label>
          <div className='flex items-center w-full'>
            <input value={status} className='w-full bg-transparent' placeholder='Update your status...' onChange={(e) =>{
              setStatus(e.target.value);
            }}/>
          
          
            <button onClick={() => updateStatus(status)}><CheckIcon className='w-5 h-5'/></button>
          
          </div>
        </div>
        <button
          onClick={handleLogout}
          className='text-white px-4 py-3 rounded bg-[#04a784] hover:bg-[#008069] mt-6 sm:mt-4 md:mt-2 transform -translate-y-2 sm:-translate-y-3 w-full sm:w-auto max-w-xs mx-auto transition'
        >
          Logout
        </button>


        </div>

    </div>
  )
}

export default Profile

