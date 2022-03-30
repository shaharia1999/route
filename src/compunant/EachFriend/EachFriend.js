import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EachFriend.css'

const EachFriend = (props) => {
    const{name,id,}=props.friend;

    const navigate=useNavigate();
    const BtnSeeDeteles=()=>{
        navigate(`/friends/${id}`)
    }
    return (
        <div className='each'>
            <h2>Name :{name}</h2>
            <Link to={`/friends/${id}`}>see Deteles</Link>
            <button onClick={BtnSeeDeteles}>Option2</button>
            
        </div>
    );
};

export default EachFriend;