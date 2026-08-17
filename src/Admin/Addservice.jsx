import React, { useState } from 'react'
import AdminStyles from './AdminStyles.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Addservice = () => {
    const [data, setData] = useState({
        sname: "",
        price: "",
        duration: "",
        sdesc: ""
    })

    const [image, setImage] = useState("");

    const formdata = new FormData();

    formdata.append("sname", data.sname);
    formdata.append("price",data.price);
    formdata.append("duration",data.duration);
    formdata.append("sdesc",data.sdesc);
    formdata.append("image",image);


    const imageHandler = (e) => { 
        setImage(e.target.files[0])
     };
     
    const changehandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const addservicedata = (e) => {
        e.preventDefault();
        axios.post(`https://backend-hzm3.onrender.com/service`, formdata)
            .then(res => {
                alert(res.data.message)
                setData({
                    sname: "",
                    price: "",
                    duration: "",
                    sdesc: ""
                })
                setImage(null);
            })
            .catch(res => {
                alert(res.data.message)
            })
    }

    return (
        <section>
            <div className={`container`}>
                <div className="row">
                    <div className="col-md-4 py-5 mx-auto">
                        <div className={AdminStyles.rapper}>
                            <form onSubmit={addservicedata}>
                                <h1><u>ADD SERVICE</u></h1>
                                <div className={AdminStyles.input}>
                                    <div className={AdminStyles.in}>
                                        <input type="text" name="sname" value={data.sname} onChange={changehandler} placeholder='Service Name' className='form-control' />
                                    </div>
                                    <div className={AdminStyles.in}>
                                        <div className={AdminStyles.priceBox}>
                                            <span>$</span>
                                            <input type="Number" name="price" value={data.price} onChange={changehandler} placeholder='Price' className='form-control' />
                                        </div>
                                    </div>
                                    <div className={AdminStyles.in}>
                                        <input type="text" name="duration" value={data.duration} onChange={changehandler} placeholder='Duration' className='form-control' />
                                    </div>
                                    <div className={AdminStyles.in}>
                                        <input type="file" name="image"  onChange={imageHandler} accept="image/*" className='form-control' />
                                    </div>
                                    <div className={AdminStyles.in}>
                                        <textarea name="sdesc" value={data.sdesc} onChange={changehandler} rows="6" className='form-control' placeholder="Service Description"></textarea>
                                    </div>
                                </div>
                                <button className='btn btn-dark' type='submit'>ADD SERVICE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Addservice