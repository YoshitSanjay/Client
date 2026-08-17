import React, { useEffect } from 'react'
import AdminStyles from './AdminStyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


const Editblog = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const {bid} = useParams();
    useEffect(()=>{
        axios.get(`https://backend-hzm3.onrender.com/blog/${bid}`)
            .then(res=>{
                console.log(res.data)
                setData(res.data.bdata)
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);

    const changeblogData=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }

    const addUpdatedBlogData = (e) =>{
      e.preventDefault();
      axios.put(`https://backend-hzm3.onrender.com/blog/${bid}`,data)
        .then(res=>{
          alert(res.data.message);
          navigate('/admindashboard/deblog')
        })
        .catch(err=>{
          alert("Unable to update the Blog data")
        })
    }

  return (
        <section>
                <div className={`container`}>
                      <div className="row">
                        <div className="col-md-4 py-5 mx-auto">
                          <div className={AdminStyles.rapper}>
                            <form onSubmit={addUpdatedBlogData}>  
                              <h1 className='mb-3'>Update Mechanic details</h1>
                              <div className={AdminStyles.in}>
                              <div className='mb-4'>
                                <input type='text' name='name' value={data.bname} onChange={changeblogData}  placeholder='Name' className='form-control'/>
                              </div>
                              <div className={AdminStyles.in}>
                                <textarea name="bdesc" value={data.bdesc} onChange={changeblogData} rows="6" className='form-control' placeholder="Blog Description"></textarea>
                              </div>
                              <div className={AdminStyles.in}>
                                <input type='date' name='date' value={data.date} onChange={changeblogData} placeholder='Date' className='form-control' required />
                              </div>
                              <div>
                                <button className='btn btn-dark' type='submit'>UPDATE BLOG DATA</button>
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

export default Editblog