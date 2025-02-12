import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout =()=>{
    const {push} = useHistory();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token,
            }
        })
            .then(rs=>{
                localStorage.removeItem('token');
                push('/login');
            })
            .catch(er=>{console.error(er)})
    },[])
    return(<div></div>)
}

export default Logout;