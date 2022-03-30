import React, { useEffect, useState } from 'react';
import EachFriend from '../EachFriend/EachFriend';
import './Friends.css';

const Friends = () => {
    const[friends,setFriends]=useState([]);
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res=>res.json())
         .then(data=>setFriends(data))
    },[])
    return (
        
               <div className='about'>
            <h1>This is the  Friends Page</h1>
            <div className='friends-card'>
            {
                friends.map(friend=><EachFriend key={friend.id} friend={friend}></EachFriend>)
            }
           
           </div>

            
            
        </div>
     
    );
};

export default Friends;