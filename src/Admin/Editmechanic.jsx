import axios from 'axios';
import AdminStyles from './AdminStyles.module.css';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Editmechanic = () => {
    const [data, setData] = useState("");
    const navigate = useNavigate();
    const {mid} = useParams();
    useEffect(()=>{
        axios.get(`https://backend-hzm3.onrender.com/mechanic/${mid}`)
            .then(res=>{
                setData(res.data.mdata)
            })
            .catch(err=>{
                console.log(err);
        })
    },[]);

    const changemechanicData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        };

    const addUpdatedMechanicData = (e) =>{
        e.preventDefault();
        axios.put(`https://backend-hzm3.onrender.com/mechanic/${mid}`,data)
            .then(res=>{
                alert(res.data.message);
                navigate('/admindashboard/demechanic')
            })
            .catch(err=>{
                alert("Unable to update the mechanic profile")
            })
    }
  return (
    <section>
            <div className={`container`}>
                  <div className="row">
                    <div className="col-md-4 py-5 mx-auto">
                      <div className={AdminStyles.rapper}>
                        <form onSubmit={addUpdatedMechanicData}>  
                          <h1 className='mb-3'>Update Mechanic details</h1>
                          <div className={AdminStyles.in}>
                          <div className='mb-4'>
                            <input type='text' name='name' value={data.name} onChange={changemechanicData}  placeholder='Name' className='form-control'/>
                          </div>
                          <div className='mb-4'>
                            <input type='text' name='email' value={data.email} onChange={changemechanicData} placeholder='Email Address' className='form-control'/>
                          </div>
                          <div className='mb-4'>
                            <input type='text' name='phone' value={data.phone} onChange={changemechanicData} placeholder='Phone Number' className='form-control'/>
                          </div>
                          <div className='mb-4'>
                            <input type="text" name="speciality" value={data.speciality} onChange={changemechanicData} className='form-control'/>
                          </div>
                          <div className='mb-2'>
                            <button className='btn btn-dark' type='submit'>EDIT MECH.DETAILS</button>
                          </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
        </section>
  )
}

export default Editmechanic