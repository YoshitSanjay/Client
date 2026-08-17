import React, { useEffect, useState } from 'react';
import Styles from './AdminStyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Editservice = () => {
    const [data, setData] = useState("");
    const navigate = useNavigate();
    const {sid} = useParams();
    useEffect(()=>{
        axios.get(`https://backend-hzm3.onrender.com/service/${sid}`)
            .then(res=>{
                setData(res.data.sdata)
            })
            .catch(err=>{
                console.log(err);
            })
    },[sid]);

    const changeserviceData=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }   

    const addUpdatedServiceData = (e) =>{
        e.preventDefault();
        axios.put(`https://backend-hzm3.onrender.com/service/${sid}`,data)
            .then(res=>{
                alert(res.data.message);
                navigate('/admindashboard/deservices')
            })
            .catch(err=>{
                alert("Unable to update the service")
            })
    }

  return (
    <section>
        <div className={`container`}>
            <div className="row">
            <div className="col-md-4 py-5 mx-auto">
            <div className={Styles.rapper}>
            <form onSubmit={addUpdatedServiceData}>
                <h1><u>UPDATE SERVICE- {data.sname?.toUpperCase()}</u></h1>
                <div className={Styles.input}>
                <div className={Styles.in}>           
                    <input type="text" name="sname" value={data.sname}  onChange={changeserviceData} placeholder='Service Name' className='form-control'/>
                </div>
                <div className={Styles.in}>
                    <div className={Styles.priceBox}>
                        <span>$</span>
                    <input type="text" name="price" value={data.price}  onChange={changeserviceData}  placeholder='Price' className='form-control'/>
                    </div>
                </div>
                <div className={Styles.in}>
                    <input type="text" name="duration" value={data.duration}  onChange={changeserviceData}  placeholder='Duration' className='form-control'/>
                </div>
                <div className={Styles.in}>
                    <textarea name="sdesc" value={data.sdesc} onChange={changeserviceData} rows="6" className='form-control' placeholder="Service Description"></textarea>
                </div>
                </div>
                <button className='btn btn-dark' type='submit'>EDIT SERVICE</button>
            </form>
        </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Editservice