import { ArrowLeft, CheckIcon, Edit2Icon, Loader2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Profile(props) {
  const navigate=useNavigate();
  const {userData,updateName,updateStatus,updatePhoto,isUploading,error} =useAuth();
  const [name,setName]=useState(userData?.name|| "");
  const [status,setStatus]=useState(userData?.status || "");
  const handleLogout=() => {
    signOut(auth);
    navigate("/login")
    

  }
  return (
    <div className='bg-[#eff2f5] w-[30vw] min-w-[350px] h-full '>
       <div className='bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6'>
            <button onClick={props.onBack}>
                <ArrowLeft/>
            </button>
            <div>profile</div>
        </div>

        <div className='flex flex-col items-center justify-center gap-8 mt-8 py-16 w-full'>
          <label className={`group relative cursor-pointer rounded-full overflow-hidden ${isUploading ? "pointer-events-none" : ""}`}>
          <img src={userData.profile_pic} alt='profile-picture' className='w-[160px] h-[160px] object-cover ' /> 
          {isUploading ? (
            <div className='absolute inset-0 flex items-center justify-center bg-black/10 z-10'>
              <Loader2Icon className='w-6 h-6 tetx-primary-dense animate-spin z-10'/>
            </div>
          ) : (
            <div className='absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/30 z-10'>
              <Edit2Icon className='w-6 h-6 text-white'/>
            </div>
          )}
           <input
       type='file'
       accept='image/png ,image/gif,image/jpeg'
       onChange={(e) =>{
        updatePhoto(e.target.files?.[0]);
       }}
       className='hidden'
       />

      </label>

     
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
        <button onClick={handleLogout} className='text-white px-4 py-3 rounded bg-[#04a784] hover:bg-[#008069] mt-8'>Logout</button>


        </div>

    </div>
  )
}

export default Profile
