import React, { useState } from 'react'
import AdminStyles from "./AdminStyles.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"


const NewAdmin = () => {
    const[data,setData] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })

    const navigate = useNavigate(); 


    const changehandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const addAdminData = (e) =>{
        e.preventDefault();
        axios.post(`https://backend-hzm3.onrender.com/register`, data)
            .then(res=>{
                alert(res.data.message);
                setData({
                    name:"",
                    email:"",
                    phone:"",
                    password:""
                })
                navigate('/admin');
            })
            .catch(err=>{
                alert(res.data.message)
            })
    }
  return (
    <div>
      <div>
        <div className={AdminStyles.bread}>
        <div className={AdminStyles.wrapper}>
            <form onSubmit={addAdminData}>
                <h1>Create Your Admin Profile</h1>
                <div className={AdminStyles.input}>
                <div className={AdminStyles.int}>
                    <input type="text" name='name'  value={data.name} onChange={changehandler} placeholder='Enter your name' required/>
                    <i className="bi bi-file-person-fill"></i>
                </div>
                <div className={AdminStyles.int}>
                    <input type="email" name='email'  value={data.email} onChange={changehandler} placeholder='Email address' required/>
                    <i className="bi bi-envelope-at-fill"></i>
                </div>
                <div className={AdminStyles.int}>
                    <input type="text" name='phone'  value={data.phone} onChange={changehandler} placeholder='Phone number' required />
                    <i className="bi bi-telephone-inbound-fill"></i>
                </div>
                <div className={AdminStyles.int}>
                    <input type="password" name='password'  value={data.password} onChange={changehandler} placeholder='Password' required />
                    <i className='bi bi-eye-slash-fill '></i>
                </div>
                </div>
                <button type='submit'>Register</button>
                <div className={AdminStyles.wrap}>
                    <p>Already have an account <NavLink to='/Admin'>Sign Up</NavLink></p>
                </div>
            </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NewAdmin