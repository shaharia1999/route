import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detels.css';

const Deteles = () => {
    let {detels}=useParams();
    const url=`https://jsonplaceholder.typicode.com/users/${detels}`;
    const [detel,setDetels]=useState({});
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetels(data))
    },[]);
    const {name,email,address,phone,website,company}=detel;
  

   
  
    return (
        <div className='detels'>
          <h1>Detels OverView</h1>
          <div className='div'>
               <h2>Name :{name}</h2>
               <h3> Email :{email}</h3>
              <h3>Address :{address?.city}</h3> 
              <h4>Phone :{phone}</h4>
              <p> Website : {website}</p>

          </div>
            
        </div>
    );
};

export default Deteles;