import React, { useEffect, useState } from 'react'
import innerStyles from './innerStyles.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const BookAppointment = () => {
  const {sname, price, name} = useParams();
  const [services, setServices] = useState([]);
  const [mechanics, setMechanics] = useState([]);
  
  useEffect(()=>{
    async function getDropdownData(){
      const res = await axios.get(`https://backend-hzm3.onrender.com/service`)
      setServices(res.data.sdata);
    };
    getDropdownData(); 
  },[])

  useEffect(()=>{
    async function getDropdowData(){
      const res = await axios.get(`https://backend-hzm3.onrender.com/mechanic`)
      setMechanics(res.data.mdata)
    };
    getDropdowData();
  },[])  


  const [ data , setData] = useState({
    name:"",
    email:"",
    phone:"",
    service: sname || "",
    price:price || "",
    mechanic:name || "",
    vechno:"",
    message:""
  })

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "service") {
      const selectService = services.find((service) => service.sname === value);
      setData({...data,service: value,price: selectService.price, mechanic: "" });
    } else {
      setData({...data,[name]: value});
    }
  };


  const addBookappointdata = (e) =>{
    e.preventDefault();
    axios.post(`https://backend-hzm3.onrender.com/bookappointment`,data)
      .then(res=>{
        alert(res.data.message);
        setData({
              name:"",
              email:"",
              phone:"",
              service:"",
              price:"",
              mechanic:"",
              vechno:"",
              message:""
        })
      })
      .catch(err=>{
        console.log(err);
      })
  }
  return (
    <main>
        <section className={innerStyles.bread}>
          <div className="container">
            <div className="row">
              <div className="col md-12">
                <h1>BOOK A SERVICE</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={`pt-5 pb-4 ${innerStyles.ramp}`}>
            <div className="container">
              <div className="row">
              <div className="col-md-7 mx-auto">
                <h1 className='text-center'>ENTER YOUR DETAILS</h1>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='mb-4'>
                    <input type='text' name="name" value={data.name} onChange={changeHandler} placeholder='Name' className='form-control' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mb-4'>
                    <input type='email' name="email" value={data.email} onChange={changeHandler} placeholder='Email' className='form-control' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mb-4'>
                    <input type='text' name="phone" value={data.phone} onChange={changeHandler} placeholder='Phone Number' className='form-control' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <select name="service" value={data.service} onChange={changeHandler} className='form-control'>
                    <option value="">Select service</option>
                    {
                      services.map((e)=>(
                        <option key={e._id} value={e.sname}>
                          {e.sname}
                        </option>
                      ))
                    }
                  </select>
                  </div>
                <div className='col-md-6'>
                  <div className={innerStyles.priceBox}>
                      <span>$</span>
                  <input type="Number" name="price" value={data.price} readOnly placeholder='Price' className='form-control'/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-4">
                  <select name="mechanic" value={data.mechanic} onChange={changeHandler} className="form-control">
                        <option value="">Select mechanic</option>
                        {mechanics
                          .filter((mechanic) => mechanic.speciality?.trim().toLowerCase() === data.service?.trim().toLowerCase())
                          .map((mechanic) => (
                            <option key={mechanic._id} value={mechanic.name}>
                              {mechanic.name}
                            </option>
                          ))}
                      </select>
                      </div>
                  </div>
                <div className='col-md-12'>
                  <div className='mb-4'>
                    <input type='text' name="vechno" value={data.vechno} onChange={changeHandler} placeholder='Vehicle Number' className='form-control' />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='mb-4'>
                    <textarea type='text' name="message" value={data.message} onChange={changeHandler} placeholder='Message' className='form-control' />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='mb-4'>
                    <input type='button' onClick={addBookappointdata}  value='BOOK SERVICE' className='btn btn-success bg-black' />
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

export default BookAppointment