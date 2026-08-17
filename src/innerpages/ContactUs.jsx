import React from 'react'
import innerStyles from "./innerStyles.module.css"
import { NavLink } from 'react-router-dom'

const ContactUs = () => {
  const subcont = e =>{
    alert("Message send successfully")
  }
  return (
    <main>
        <section className={innerStyles.bread}>
          <div className="container">
            <div className="row">
              <div className="col md-12">
                <h1>CONTACT US</h1>
              </div>
            </div>
          </div>
        </section>
        <section className='py-5'>
          <div className='container'>
            <div className='row g-4'>
              <div className='col-lg-4 col-md-6'>
                <div className={innerStyles.wrapper}>
                  <div className="text-center">
                    <i className="bi bi-geo-alt-fill"></i>
                    <h4>LOCATION</h4>
                    <p>Plot Number 40, Second Floor, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className={innerStyles.wrapper}>
                  <div className='text-center'>
                    <i className="bi bi-telephone-outbound-fill"></i>
                    <h4>PHONE</h4>
                    <p className={innerStyles.phoneText}>9849825541</p>
                    <p className={innerStyles.phoneText}>6325111525</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className={innerStyles.wrapper}>
                  <div className="text-center">
                    <i className="bi bi-envelope-at-fill"></i>
                    <h4 className='mb-3'>EMAIL ADDRESS</h4>
                    <p className={innerStyles.emailText}>info@leongarage.in</p>
                    <p className={innerStyles.emailText}>leonsgarage@hr.yahoo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`pt-5 pb-4 ${innerStyles.rap}`}>
            <div className="container">
              <div className="row">
              <div className="col-md-7 mx-auto">
              <div className='row'>
                <div className='col-md-6'>
                  <div className='mb-4'>
                    <input type='text' name="name" placeholder='Name'
                    className='form-control' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mb-4'>
                    <input type='text' name="name" placeholder='Email'
                    className='form-control' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mb-4'>
                    <input type='text' name="name" placeholder='Phone Number'
                    className='form-control' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mb-4'>
                    <input type='text' name="name" placeholder='Subject'
                    className='form-control' />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='mb-4'>
                    <textarea type='text' name="name" placeholder='Message'
                    className='form-control' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mb-4'>
                    <input type='button' onClick={subcont} value='Send Message' className='btn btn-success bg-black' />
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
          </section>
      </main>
  )
}

export default ContactUs