import React, { useEffect, useState } from 'react'
import styles from './AdminStyles.module.css'
import axios from 'axios'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min'
import $ from 'jquery';
import { NavLink } from 'react-router-dom'

const Deleteservice = () => {
  const [data, setData] = useState([]);
  useEffect(()=> {
  axios.get(`https://backend-hzm3.onrender.com/service`)
    .then(res => {
      setData(res.data.sdata);
    })
    .catch(err => {
      console.log(err);
    })

    $(function(){
      setTimeout(function(){
      new DataTable('#myTable')
    },1000);
  })
});
  
  const deleteServiceData =(sid)=>{
    const status= window.confirm("Are you sure you want to delete this service?");
    if(status){
      axios.delete(`https://backend-hzm3.onrender.com/service/${sid}`)
      .then(res=>{
        alert(res.data.message);
      })
      .catch(err=>{
        console.log(err);
      })
    }
    else{
      alert("Deletion cancelled.");
    }
  }

  return (
    <div className={styles.tablePage}>
      <h2>DELETE/EDIT SERVICES</h2>
      <div className={styles.tableWrapper}>
        <table className={`display  ${styles.table}`} id="myTable">
          <thead>
            <tr>
              <th>Service</th>
              <th>prices</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            (data||[]).map((sdata) => (
              <tr key={sdata._id}>
                <td>{sdata.sname}</td>
                <td>${sdata.price}</td>
                <td>{sdata.duration}</td>
                <td>
                  <button className={`btn btn-danger ${styles.deleteBtn}`} onClick={()=>deleteServiceData(sdata._id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                  <NavLink to={`/admindashboard/deservices/${sdata._id}`}>
                      <button className={`btn btn-info ms-3 ${styles.deleteBtn}`}>
                        <i className="bi bi-pencil"></i>
                      </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Deleteservice