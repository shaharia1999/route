import React, { useEffect, useState } from 'react';
import Nestetitem from '../NestetItem/Nestetitem';
import "./Nes.css"

const Nastet = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(data=>setItems(data))
       
    },[])
    return (
        <div className='id'>
            {
                items.map(item=><Nestetitem key={item.id} item={item}></Nestetitem>)
            }
            
        </div>
    );
};

export default Nastet;