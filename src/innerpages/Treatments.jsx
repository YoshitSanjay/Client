import React, { useEffect, useState } from 'react'
import innerStyles from './innerStyles.module.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


const Treatments = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get(`https://backend-hzm3.onrender.com/service`)
      .then(res=>{
        setData(res.data.sdata);
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
                <h1>SERVICES</h1>
              </div>
            </div>
          </div>
      </section>
      <section className={`${innerStyles.servicesSection} py-5`}>
        <div className='container'>
          <div className='row g-4'>
          {
            data.map((sdata) => (
              <div key={sdata._id} className='col-lg-4 col-md-6'>
                <NavLink to={`/services/${sdata._id}`} className={innerStyles.serviceCardLink}>
                  <article className={innerStyles.serviceCard}>
                    <div className={innerStyles.serviceCardHeader}>
                        <img src={`https://backend-hzm3.onrender.com/uploads/${sdata.filename}`} alt={sdata.sname} className={`${innerStyles.serviceImage} img-fluid`}/>
                      <h4  className='mt-4'>{sdata.sname}</h4>
                    </div>
                    <div className={innerStyles.serviceCardFooter}>
                      <span>View details</span>
                    </div>
                  </article>
                </NavLink>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Treatments