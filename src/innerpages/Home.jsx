import React, { useEffect, useState } from 'react'
import innerStyles from './innerStyles.module.css'
import images from '../assets/images.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const [data,setData] = useState([]);
    useEffect(()=>{
    axios.get(`https://backend-hzm3.onrender.com/service/limit/3`)
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
                <h1>HOME</h1>
              </div>
            </div>
          </div>
      </section>
      <section>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className={`carousel-inner ${innerStyles.carousel}`}>
            <div className="carousel-item active">
              <img src={images} className="d-block w-100" alt="FIRST SLIDE"/>
              <div className="carousel-caption d-none d-md-block">
                  <p>
                    We provide reliable vehicle repair, maintenance, diagnostics, and servicing
                    with experienced technicians to keep your car running safely and efficiently.
                  </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="SECOND SLIDE"/>
              <div className="carousel-caption d-none d-md-block">
                <p>
                  From routine oil changes to complex engine repairs, our certified mechanics
                  deliver quality workmanship using modern tools and genuine spare parts.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="THIRD SLIDE"/>
              <div className="carousel-caption d-none d-md-block">
                    <p>
                      Book your service online, track repair progress, and enjoy transparent
                      pricing with quick turnaround times for all types of vehicles.
                    </p>
                  </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className={`${innerStyles.servicesSection} py-5`}>
        <div className='container'>
          <div className='row g-4'>
            <h1 className='text-danger'>Services</h1>
          {
            data.map((sdata) => (
              <div key={sdata._id} className='col-lg-4 col-md-6'>
                <NavLink to={`/services/${sdata._id}`} className={innerStyles.serviceCardLink}>
                  <article className={innerStyles.serviceCard}>
                    <div className={innerStyles.serviceCardHeader}>
                        <img src={`https://backend-hzm3.onrender.com/uploads/${sdata.filename}`} alt={sdata.sname} className={`${innerStyles.serviceImage} img-fluid`}/>
                      <h4 className='mt-4'>{sdata.sname}</h4>
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
      <section className={`py-5 ${innerStyles.aboutus}`}>
         <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h4>Leon Services aspires to be a one-stop solution for all car care needs</h4>
                <h2 className='text-danger'>Where caring for your Vehicle is all we do</h2>
                <p>GoMechanic stands at the forefront of the automotive service industry, blending reliability with cost-effectiveness for unparalleled car care. Today, GoMechanic 2.0, acquired by Servizzy, is redefining the automotive service industry. Led by co-founders Himanshu Arora and Muskan Kakkar, our mission is to redefine the automotive service industry through innovation, reliability, and customer-centricity.</p>
                <p>We have expanded our presence across 50+ cities in India, offering comprehensive car servicing solutions tailored to meet the diverse needs of our customers. Our dedicated team of over 100 skilled technicians undergo meticulous training to ensure expertise in the latest automotive technologies.</p>
                <NavLink to="/bookservice">
                  <button>BOOK YOUR SERVICE</button>
                </NavLink>
              </div>
            </div>
          </div>
      </section>
    </main>
  )
}

export default Home