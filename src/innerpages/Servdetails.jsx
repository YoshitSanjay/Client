import React, { useEffect, useState } from 'react'
import innerStyles from "./innerStyles.module.css";
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Servdetails = () => {
    const [data , setData] = useState({});
    const [mechanics, setMechanics] = useState([]);
    const [selectedMechanic, setSelectedMechanic] = useState("");
    const navigate = useNavigate();
    const {sid} = useParams();

    useEffect(()=>{
        axios.get(`https://backend-hzm3.onrender.com/service/${sid}`)
            .then(res=>{
                setData(res.data.sdata)
            })
            .catch(err=>{
                console.log(err)
            })
        axios.get(`https://backend-hzm3.onrender.com/mechanic`)
          .then(res => {
              setMechanics(res.data.mdata);
          })
          .catch(err => {
              console.log(err);
          });
    },[sid])

  const availableMech = Array.isArray(mechanics)
   ? mechanics.filter(mechanic => mechanic.speciality === data?.sname): [];

  const selectedMech = availableMech.find(
    mechanic => mechanic._id === selectedMechanic
  );

  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col md-12">
              <h1>DETAILS - {data.sname?.toUpperCase()}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-5 ${innerStyles.aboutus}`}>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-8'>
              <div className={innerStyles.detailCard}>
                <h1 className={innerStyles.detailTitle}>{data.sname}</h1>
                <div className={innerStyles.detailMeta}>
                  <span className={innerStyles.metaLabel}>Price</span>
                  <span className={innerStyles.metaValue}>${data.price}</span>
                </div>
                <div className={innerStyles.detailMeta}>
                  <span className={innerStyles.metaLabel}>Duration</span>
                  <span className={innerStyles.metaValue}>{data.duration}</span>
                </div>
                <h4>Description</h4>
                <p>{data.sdesc}</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className={innerStyles.availableMechanics}>
                <h3>Available Mechanics</h3>
                {availableMech.length > 0 ? (
                  availableMech.map(mechanic => (
                    <label key={mechanic._id} className={innerStyles.mechanicOption}>
                      <input
                        type="radio"
                        name="mechanic"
                        value={mechanic._id}
                        checked={selectedMechanic === mechanic._id}
                        onChange={(e) => setSelectedMechanic(e.target.value)}
                      />
                      <span>{mechanic.name}</span>
                    </label>
                  ))
                ) : (
                  <p className={innerStyles.noMechanic}>No mechanic available for this service.</p>
                )}
              </div>
              <div className='mt-3'>
                {selectedMech ? (
                  <NavLink to={`/bookservice/${data.sname}/${data.price}/${selectedMech.name}`}>
                    <button className={innerStyles.bookButton}>BOOK SERVICE</button>
                  </NavLink>
                ) : (
                  <button className={innerStyles.bookButton} disabled>
                    Select a mechanic to continue
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Servdetails