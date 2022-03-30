import React, {useState} from 'react';
import {useHistory } from 'react-router-dom'
import axios from 'axios';

function Login() {
    const {push} = useHistory();

    const [cred, setCred] = useState({
        username:"",
        password:"",
    });
    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then(response => {
                localStorage.setItem("token", response.data.payload);
                push('/friends')
            })
            .catch(err=>{})
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input onChange={handleChange} name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input onChange={handleChange} name="password" type="password" id="password" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Login;