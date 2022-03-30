import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Friends() {
    const [ friends, setFriends ] = useState([]);
    
    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                authorization: token,
            }
        })
            .then(rs=>{})
            .catch(er=>{})
    },[]);

    return ( 
    <div>
        <h2>My Friends</h2>
        <ul>
            <li>Name - age - email</li>
            <li>Name - age - email</li>
            <li>Name - age - email</li>
            <li>Name - age - email</li>
        </ul>
    </div>
        )
}

export default Friends;