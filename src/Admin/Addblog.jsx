import React, { useState } from 'react'
import AdminStyles from './AdminStyles.module.css'
import axios from 'axios'

const Addblog = () => {
  const [data, setData] = useState({
    bname:"",
    bdesc:"",
    data:""
  })
  
  const changehandler = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const addblogdata = (e) =>{
    e.preventDefault();
    axios.post(`https://backend-hzm3.onrender.com/blog`,data)
      .then(res=>{
        alert(res.data.message);
        setData({
          bname:"",
          bdesc:""
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
                    <form onSubmit={addblogdata}>
                        <h1><u>ADD BLOG</u></h1>
                        <div className={AdminStyles.input}>
                        <div className={AdminStyles.in}>
                            <input type="name" name="bname" value={data.bname} onChange={changehandler} placeholder='Blog Name' className='form-control'/>
                        </div>
                        <div className={AdminStyles.in}>
                            <textarea name="bdesc" value={data.bdesc} onChange={changehandler} rows="6" className='form-control' placeholder="Blog Description"></textarea>
                        </div>
                        <div className={AdminStyles.in}>
                          <input type='date' name='date' value={data.date} onChange={changehandler} placeholder='Date' className='form-control' required />
                        </div>
                        </div>
                        <button className='btn btn-dark' type='submit'>ADD BLOG</button>                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Addblog