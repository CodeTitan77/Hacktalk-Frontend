import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId,setEmailId]=useState("");
    const [password,setPassword]=useState("");
    const dispatch =useDispatch();
    const handleLogin= async()=>{
      try{
         const res=  await axios.post(BASE_URL+"/login",{
        emailId,
        password,

      },{
        withCredentials:true
      });
      console.log(res.data);
      dispatch(addUser(res.data));

      }
      catch(error){
        console.log(error);

      }
    

    };
  return (
    <div className="flex justify-center my-10">
    <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
   <label className="form-control w-full max-w-xs my-2 ">
  <div className="label">
    <span className="label-text">Email Id </span>
    
  </div>
  <input value={emailId} onChange={(e)=>setEmailId(e.target.value)}type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</label>
 <label className="form-control w-full max-w-xs my-2 ">
  <div className="label">
    <span className="label-text">Password </span>
    
  </div>
  <input value={password} onChange={(event)=>setPassword(event.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</label>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login Button</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
