import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';


function Friends() {
    const [ friends, setFriends ] = useState([]);
    
    useEffect(()=>{
        axiosWithAuth().get('/friends')
            .then(rs=>{setFriends(rs.data)})
            .catch(er=>{console.error(er)})
    },[]);

    return ( 
    <div>
        <h2>My Friends</h2>
        <ul>
            {
                friends.map(friend=>{
                    return <li>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }
        </ul>
    </div>
        )
}

export default Friends;