import React, { useContext, useEffect, useState } from 'react';
import AdminStyles from './AdminStyles.module.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import axios from 'axios';
import { store } from '../App';

const AdminDashboard = () => {
  const [token,setToken] = useContext(store);
  const[data,setData] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(`https://backend-hzm3.onrender.com/admindashboard`,{
      headers: {
        "x-token" : token
      }
    })
    .then(res=>{
      setData(res.data.message);
      })
      .catch(err=>{
        console.log(err)
      })
  },[])


  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogout = () =>{
    navigate("/", { replace: true });
    localStorage.removeItem("token");
    setToken(null);
  };


  return (
    <main>
      <section className={AdminStyles.bun}>
          <div className="d-flex justify-content-between px-4 align-items-center">
            <h1 className="mb-0">ADMIN DASHBOARD</h1>
              <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
              </div>
          </section>
          <section className="container-fuild">
              <div className="row g-0 align-items-stretch">
                <div className={`col-md-auto p-0 m-0 ${AdminStyles.sidz}`}>
                  <Sidebar/>
                </div>
                <div className="col">
                  <Outlet />
                </div>
              </div>
          </section>
        <footer className='bg-dark bg-gradient text-light py-5'>
            <div className='container'>
                <div className='row align-items-lg-center justify-content-between'>
                    <div className='col col-lg-4'>
                        <h4><i className='bi bi-c-circle fs-4'></i> Belongs to Leon Garage.Pvt</h4>
                        </div>
                        <div className='col-lg-4 ms-lg-auto text-lg-end'>
                        <div>
                        <NavLink to="https://www.instagram.com/bmw/" target='_blank' rel='noopener noreferrer'><i className='bi bi-instagram fs-4 text-white me-3'></i></NavLink>
                        <NavLink to="https://www.facebook.com/BMW/" target='_blank'><i className='bi bi-facebook fs-4 text-white me-3'></i></NavLink>
                        <NavLink to="https://x.com/BMW" target='_blank'><i className='bi bi-twitter-x fs-4 text-white me-3'></i></NavLink>
                        <NavLink to="https://www.pinterest.com/noco1914/bmw/" target='_blank'><i className='bi bi-pinterest fs-4 text-white me-3'></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </main>
  )
}

export default AdminDashboard