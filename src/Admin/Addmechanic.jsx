import React, { useEffect, useState } from 'react'
import AdminStyles from './AdminStyles.module.css'
import axios from 'axios'

const Addmechanic = () => {
  const [data, setData] = useState ({
    name:"",
    email:"",
    phone:"",
    speciality:""
  })

  const [services, setServices] = useState([]);

  useEffect(()=>{
    async function getDropdownData(){
      const res = await axios.get(`https://backend-hzm3.onrender.com/service`)
      setServices(res.data.sdata);
    };
    getDropdownData(); 
  },[])

  const changehandler = (e) =>{
    setData({...data, [e.target.name]:e.target.value});
  }

  const addmechanicdata = (e) =>{
    e.preventDefault();
    axios.post(`https://backend-hzm3.onrender.com/mechanic`, data)
      .then(res=>{
          alert(res.data.message);
          setData({
            name:"",
            email:"",
            phone:"",
            speciality:""
          })
      })
      .catch(res=>{
        alert(res.data.message)
      })
  }
  return (
        <section>
        <div className={`container`}>
              <div className="row">
                <div className="col-md-4 py-5 mx-auto">
                  <div className={AdminStyles.rapper}>
                    <form onSubmit={addmechanicdata}>  
                      <h1 className='mb-3'>Enter Mechanic details</h1>
                      <div className={AdminStyles.in}>
                      <div className='mb-4'>
                        <input type='text' name='name' value={data.name} onChange={changehandler}  placeholder='Name' className='form-control'/>
                      </div>
                      <div className='mb-4'>
                        <input type='email' name='email' value={data.email} onChange={changehandler} placeholder='Email Address' className='form-control'/>
                      </div>
                      <div className='mb-4'>
                        <input type='text' name='phone' value={data.phone} onChange={changehandler} placeholder='Phone Number' className='form-control'/>
                      </div>
                      <div className={AdminStyles.in}>
                        <select name="speciality" value={data.speciality} onChange={changehandler} className='form-control'>
                          <option value="">Select Speciality</option>
                          {
                            services.map((e)=>(
                              <option key={e._id} value={e.sname}>
                                {e.sname}
                              </option>
                            ))
                          }
                        </select>
                      </div>
                      <div className='mb-2'>
                        <button className='btn btn-dark' type='submit'>ADD SERVICE</button>
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

export default Addmechanic