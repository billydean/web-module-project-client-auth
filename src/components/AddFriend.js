import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function AddFriend () {
    const {push} = useHistory();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
    })
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const submitFriend = (e) =>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(rs => {
                push('/friends')
            })
            .catch()

    }
    return (        
    <div>
        <h1>ADD FRIEND</h1>
        <form onSubmit={submitFriend}>
            <div>
                <label htmlFor="name">FRIEND NAME</label>
                </div><div>
                <input onChange={handleChange} id="name" />
            </div>
            <div>
                <label htmlFor="age">FRIEND AGE</label>
                </div><div>
                <input onChange={handleChange} id="age" />
            </div>
            <div>
                <label htmlFor="email">FRIEND EMAIL</label>
                </div><div>
                <input onChange={handleChange} id="email" />
            </div>
            <button>Submit</button>
        </form>
    </div>)
  }

export default AddFriend;