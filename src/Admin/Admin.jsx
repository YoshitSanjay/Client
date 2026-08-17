import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AdminStyles from "./AdminStyles.module.css"
import axios from 'axios'
import { useState } from 'react'
import { store } from '../App'

const Admin = () => {
    const [token, setToken] = useContext(store);
    const [data, setData] = useState({
        email:"",
        password:"",
    })
    
    const navigate = useNavigate();

    const changehandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const adminLoginCheck = (e) => {
        e.preventDefault();
        axios.post(`https://backend-hzm3.onrender.com/login`, data)
        .then(res=>{
            if(res.data.message === "Invalid User Email"){
                alert("User not found");
            }
            else if(res.data.message === "Invalid Password"){
                alert("INVALID PASSWORD");
            }
            else{
                setToken(res.data.token);
            }
        })
        .catch(err=>{
            alert(res.data.message);
        })
    }
    useEffect(() => {
        if (token) {
            window.alert("Login Successful");
            navigate("/admindashboard/addservices");
        }
    }, [token, navigate]);
  return (
    <main>
        <div className={AdminStyles.bread}>
        <div className={AdminStyles.wrapper}>
            <form onSubmit={adminLoginCheck}>
                <h1>LOGIN</h1>
                <div className={AdminStyles.input}>
                <div className={AdminStyles.int}>
                    <input type="email" name='email' value={data.email} onChange={changehandler} placeholder='Email address'   required/>
                    <i className="bi bi-person-circle"></i>
                </div>
                <div className={AdminStyles.int}>
                    <input type="password" name='password' value={data.password} onChange={changehandler} placeholder='Password'  required/>
                    <i className='bi bi-eye-slash-fill '></i>
                </div>
                </div>
                <div className={AdminStyles.remember}>
                    <label><input type="checkbox" />Remember me</label>
                    <NavLink to='/forgetpass'>Forget Password?</NavLink>
                </div>
                <button  type='submit'>LOGIN</button>
                <div className={AdminStyles.wrap}>
                    <p>Don't have an account? <NavLink to='/register'>Register</NavLink></p>
                </div>
            </form>
        </div>
        </div>
    </main>
  )
}

export default Admin