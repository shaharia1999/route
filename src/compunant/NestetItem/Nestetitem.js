import React from 'react';
import { Link } from 'react-router-dom';
import './Nested.css'

const Nestetitem = (props) => {
    const {id}=props.item;
    return (
        <div className='id'>
          
           <Link to={`/page/${id}`}>{id}</Link>
            
            
        </div>
    );
};

export default Nestetitem;