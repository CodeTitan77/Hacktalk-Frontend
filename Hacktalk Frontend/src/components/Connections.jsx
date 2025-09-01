import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';



const Connections = () => {
    const dispatch= useDispatch();
    const fetchConnections=async()=>{
        try{
            const res=  await axios.get(BASE_URL+"/user/connections",{
                withCredentials:true,
            });
            console.log(res);
            dispatch(addConnections(res.data.data));
            

        }
        catch(error){
       console.log(error);
        }
    };
    useEffect(()=>{
      fetchConnections();
    },[]);
  return (
    <div className="flex justify-center my-10">
     <h1 className='text-bold text-2xl'> Connections</h1>
    </div>
  )
}

export default Connections
