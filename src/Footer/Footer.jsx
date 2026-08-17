import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    const [data, setData]=useState([]);
    useEffect(()=>{
    axios.get(`https://backend-hzm3.onrender.com/service/limit/6`)
      .then(res=>{
        setData(res.data.sdata);
      })
      .catch(err=>{
        console.log(err);
      })
  },[])
  return (
    <footer className="bg-dark text-light py-4">
        <div className='container px-4'>
            <div className="row">
            <div className="col-6 col-lg-4">
                <h3 className='pt-3 text-danger'>LEON GARAGE</h3>
                <p>Lorem ipsum dolor sit amet</p>
                <p>92883979874</p>
                <p>1234567890</p>
            </div>
            <div className="col">
                <h4 className='pt-3'>Categories</h4>
                <ul className='list-unstyled'>
                    {
                    data.map((sdata)=> (
                        <div key={sdata._id}>
                    <li><NavLink to={`/services/${sdata._id}`} className="text-decoration-none text-white">{sdata.sname}</NavLink></li>    
                    </div>
                    ))
                }       
                </ul>
            </div>
            <div className="col">
                <h4 className='pt-3'>Menu</h4>
                <ul className='list-unstyled'>
                    <li><NavLink to="/aboutus" className="text-decoration-none text-white">About us</NavLink></li>
                    <li><NavLink to="/contactus" className="text-decoration-none text-white">Contact us</NavLink></li>
                </ul>
            </div>
            <div className="col-6 col-lg-3">
                <h4 className='pt-3'>Social Media</h4>
                <div>
                    <NavLink className="text-decoration-none text-danger" to="https://www.instagram.com/bmw/?hl=en" target='_blank' rel='noopener noreferrer'><i className='bi bi-instagram fs-2 me-3'></i></NavLink>
                    <NavLink className="text-decoration-none" to="https://www.facebook.com/bmwindia/" target='_black' rel='noopener noreferrer'><i className='bi bi-facebook fs-2 me-3'></i></NavLink>
                    <NavLink className="text-decoration-none text-danger" to="https://in.pinterest.com/noco1914/bmw/" target='_blank'><i className='bi bi-pinterest fs-2 me-3'></i></NavLink>
                    <NavLink className="text-decoration-none" to="https://www.linkedin.com/company/bmw-group/" target='_blank'><i className='bi bi-linkedin fs-2'></i></NavLink>
                </div>
            </div>
            </div>
            <hr />
            <div className=' d-flex justify-content-between'>
                <p>2026 © Leon Garage.All Rights Reserved.</p>
                <div className='d-flex'>
                    <NavLink className="text-decoration-none text-white me-5" to="#">Terms of use</NavLink>
                    <NavLink className="text-decoration-none text-white" to="#">Privacy Policy</NavLink>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer