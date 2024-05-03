import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import { app } from '../../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
function Register() {

    const initialFormData = {
        name: "",
        pfp: null,
        pn: +961,
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const navigate = useNavigate();
    const [info, setInfo] = useState(initialFormData)
    const [errormsg, seterrormsg] = useState('')
    function handleChange(event) {
        const { name, value } = event.target;
        const newValue = name === 'pfp' ? event.target.files[0] : value;

        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: newValue
        }))

    }


    async function handleSubmit(event) {
        event.preventDefault()
        const { password, confirmPassword } = info;
        if (password !== confirmPassword) {
            //alert("Passwords do not match. Please try again.")
            seterrormsg("Passwords don't match")
            return;
        }

        console.log(info)
        var email = info.email
        var name = info.name
        var username = info.username
        var pn = info.pn
        var file = info.pfp
        var formdata = new FormData()
        formdata.append('username', username)
        formdata.append('name', name)
        formdata.append('email', email)
        formdata.append('pn', pn)
        formdata.append('image', file)

        try {
            const response = await fetch('/api/adduser', {
                method: 'POST',

                body: formdata
            })
            const data = await response.json()

            if (!response.ok) {

                seterrormsg(data.error)
                return;
            }
        } catch (error) {
            console.log(error)
            return;
        }
        console.log('meshe l7al')
        const auth = getAuth()
        try {
            const reg = await createUserWithEmailAndPassword(auth, info.email, info.password)

            navigate('/')
        } catch (error) {

            seterrormsg(error)
            return;
        }
    }

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pfp">Profile Picture</label>
                <input onChange={handleChange} type="file" accept="image/*" id="pfp" name="pfp" />

                <label htmlFor="name">Full name</label>
                <input onChange={handleChange} value={info.name} type="text" id="name" name="name" placeholder="Enter your full name" />

                <label htmlFor="pn">Phone Number</label>
                <input onChange={handleChange} value={info.pn} type="text" id="pn" name="pn" placeholder="Enter your phone number" />

                <label htmlFor="username">Username</label>
                <input onChange={handleChange} value={info.username} type="text" id="username" name="username" placeholder="Enter your name" />

                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={info.email} type="email" id="email" name="email" placeholder="JoseMorinho@outlook.com" />

                <label htmlFor="password">Password</label>
                <input onChange={handleChange} value={info.password} type="password" id="password" name="password" placeholder="********************" />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={handleChange} value={info.confirmPassword} type="password" id="confirmPassword" name="confirmPassword" placeholder="********************" />

                <button type="submit" className="register-btn">Register</button>
                <button type="button" className="login-btn" onClick={() => navigate('/')}>Already have an account? Login here.</button>
            </form>
            {errormsg && <p className="error-msg">{errormsg}</p>}
        </div>

    )
}
export default Register;