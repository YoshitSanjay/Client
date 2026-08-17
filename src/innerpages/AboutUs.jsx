import React from 'react';
import innerStyles from "./innerStyles.module.css";
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <main>
        <section className={innerStyles.bread}>
          <div className="container">
            <div className="row">
              <div className="col md-12">
                <h1>ABOUT US</h1>
              </div>
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

export default AboutUs