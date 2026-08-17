import React, { useEffect, useState } from 'react'
import styles from './AdminStyles.module.css'
import axios from 'axios'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min'
import $ from 'jquery';
import { NavLink } from 'react-router-dom'

const Deletemechanic = () => {
  const [data, setData] = useState([]);
  useEffect(()=> {
  axios.get(`https://backend-hzm3.onrender.com/mechanic`)
    .then(res => {
      setData(res.data.mdata);
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
  
  const deleteMechanicData =(mid)=>{
    const status = window.confirm("Are you sure you want to delete this Employee?");
    if(status){
      axios.delete(`https://backend-hzm3.onrender.com/mechanic/${mid}`)
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
      <h2>DELETE/EDIT EMPLOYEE</h2>
      <div className={styles.tableWrapper}>
        <table className={`display  ${styles.table}`} id="myTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            (data || []).map((mdata) => (
              <tr key={mdata._id}>
                <td>{mdata.name}</td>
                <td>{mdata.email}</td>
                <td>{mdata.phone}</td>
                <td>{mdata.speciality}</td>
                <td>
                  <button className={`btn btn-danger ${styles.deleteBtn}`} onClick={()=>deleteMechanicData(mdata._id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                  <NavLink to={`/admindashboard/demechanic/${mdata._id}`}>
                      <button className={`btn btn-info ms-3 ${styles.deleteBtn}`}>
                        <i className="bi bi-pencil"></i>
                      </button>
                  </NavLink>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Deletemechanic