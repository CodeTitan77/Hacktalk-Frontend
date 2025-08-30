/* eslint-disable react/prop-types */
import React, { useState,useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import UserCard from './UserCard';
import { useDispatch } from 'react-redux';
import axios from "axios";

import { addUser } from "../utils/userSlice";


const EditProfile = ({user}) => {

    
    const[firstName,setFirstName]=useState(user.firstName);
    const [lastName,setLastName]=useState(user.lastName);

        const [age,setAge]=useState(user.age);
        const [gender,setGender]=useState(user.gender);
        const [about,setAbout]=useState(user.about);
        const [error,setError]=useState("");
        const [photoUrl,setphotoUrl]=useState(user.photoUrl);
        const dispatch= useDispatch();
        const [toast,setToast]=useState(false)

        const saveProfile= async()=>{
          setError("");
          try{
            const res= await axios.patch(BASE_URL+"/profile/edit",
              {firstName,lastName,about,age,gender,photoUrl}
              ,{withCredentials:true}
            );
            dispatch(addUser(res?.data)?.data);
            setToast(true);
            setTimeout(()=>{
              setToast(false);

            },3000);


          }
          catch(error){
            setError(error.response.data);

          }

        }


  return (
    <div className="flex justify-center my-10"> 
   <div className="flex justify-center mx-10 ">
    <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Edit Profile</h2>
   <label className="form-control w-full max-w-xs my-2 ">
  <div className="label">
    <span className="label-text">First Name</span>
    
  </div>
  <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}
   placeholder="Type here"
    className="input input-bordered w-full max-w-xs" />
  
</label>

 <label className="form-control w-full max-w-xs my-2 ">
  <div className="label">
    <span className="label-text">LastName </span>
    
  </div>
  <input value={lastName} onChange={(event)=>setLastName(event.target.value)}
   type="text" placeholder="Type here"
    className="input input-bordered w-full max-w-xs" />
    </label>

     <label className="form-control w-full max-w-xs my-2 ">
  <div className="label">
    <span className="label-text">Photo Url </span>
    
  </div>
  <input value={photoUrl} onChange={(event)=>setphotoUrl(event.target.value)}
   type="text" placeholder="Type here"
    className="input input-bordered w-full max-w-xs" />
    </label>

     <label className="form-control w-full max-w-xs my-2 ">
  <div className="label">
    <span className="label-text">Age </span>
    
  </div>
  <input value={age} onChange={(event)=>setAge(event.target.value)}
   type="text" placeholder="Type here"
    className="input input-bordered w-full max-w-xs" />
    </label>

     <label className="form-control w-full max-w-xs my-2 ">
  <div className="label">
    <span className="label-text">About </span>
    
  </div>
  <input value={about} onChange={(event)=>setAbout(event.target.value)}
   type="text" placeholder="Type here"
    className="input input-bordered w-full max-w-xs" />
    </label>

     <label className="form-control w-full max-w-xs my-2 ">
  <div className="label">
    <span className="label-text">Gender </span>
    
  </div>
  <input value={gender} onChange={(event)=>setGender(event.target.value)}
   type="text" placeholder="Type here"
    className="input input-bordered w-full max-w-xs" />
  
</label>
  
    <div className="card-actions justify-cente r">
      <button onClick={saveProfile} className="btn btn-primary " >Edit Profile</button>
    </div>
  </div>
</div>
    </div>
    <div>
    <UserCard user={{firstName,lastName,about,gender,age,photoUrl}}/> 
    </div>
    {toast && 
        <div className="toast toast-center toast-middle">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>}
    </div>
    
  )
  
}

export default EditProfile
