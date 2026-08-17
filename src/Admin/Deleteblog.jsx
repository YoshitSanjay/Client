import React, { useEffect, useState } from 'react'
import styles from './AdminStyles.module.css'
import axios from 'axios'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min'
import $ from 'jquery';
import { NavLink } from 'react-router-dom'

const Deleteblog = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
  axios.get(`https://backend-hzm3.onrender.com/blog`)
    .then(res=>{
      setData(res.data.bdata);
    })  
    .catch(err=>{
      console.log(err);
    })

    $(function(){
      setTimeout(function(){
        new DataTable('#myTable')
      },1000);
    })
  });
  
  const deleteBlogData =(bid)=>{
    const status = window.confirm("Are you sure you want to delete this Blog?");
    if(status){
      axios.delete(`https://backend-hzm3.onrender.com/blog/${bid}`)
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
      <h2>Delete/edit Blog Posts</h2>
      <div className={styles.tableWrapper}>
        <table className={`display  ${styles.table}`} id="myTable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            (data || []).map((bdata) => (
              <tr key={bdata._id}>
                <td>{bdata.bname}</td>
                <td>{bdata.bdesc}</td>
                <td>
                  <button className={`btn btn-danger ${styles.deleteBtn}`} onClick={()=>deleteBlogData(bdata._id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                  <NavLink to={`/admindashboard/deblog/${bdata._id}`}>
                      <button className={`btn btn-info me-3 my-3 ${styles.deleteBtn}`}>
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

export default Deleteblog