import React, { useEffect, useState } from 'react'
import innerStyles from './innerStyles.module.css'
import axios from 'axios';

const Blog = () => {
  const [data, setData] = useState();
  useEffect(()=>{
    axios.get(`https://backend-hzm3.onrender.com/blog`)
      .then(res=>{
        console.log(res.data)
        setData(res.data.bdata)
      })
      .catch(err=>{
        console.log(err);
      })
  },[])
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
            <div className="row">
              <div className="col md-12">
                <h1>BLOG</h1>
              </div>
            </div>
          </div>
      </section>
      <section className={`py-5 ${innerStyles.aboutus}`}>
        {
          (data||[]).map((bdata)=>(
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='text-danger'>{bdata.bname}</h1>
                <h5>{bdata.date}</h5>
                <p>{bdata.bdesc}</p>
                <hr />
              </div>
            </div>
          </div>
          ))}
        </section>
    </main>
  )
}

export default Blog