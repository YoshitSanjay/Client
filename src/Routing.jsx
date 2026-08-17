import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './innerpages/Home'
import Layout from "./Layout"
import AboutUs from './innerpages/AboutUs'
import Treatments from './innerpages/Treatments'
import BookAppointment from './innerpages/BookAppointment'
import Blog from './innerpages/Blog'
import ContactUs from './innerpages/ContactUs'
import Admin from './Admin/Admin'
import NewAdmin from './Admin/NewAdmin'
import Forgetpass from './Admin/Forgetpass'
import AdminDashboard from './Admin/AdminDashborad'
import Addservice from './Admin/Addservice'
import Deleteservice from './Admin/Deleteservice'
import Addmechanic from './Admin/Addmechanic'
import Deletemechanic from './Admin/Deletemechanic'
import Addblog from './Admin/Addblog'
import Deleteblog from './Admin/Deleteblog'
import Editservice from './Admin/Editservice'
import Editmechanic from './Admin/Editmechanic'
import Editblog from './Admin/Editblog'
import Servdetails from './innerpages/Servdetails'
import Nopage from './innerpages/Nopage'


const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/services" element={<Treatments/>} />
        <Route path="/services/:sid" element={<Servdetails/>} />
        <Route path="/bookservice" element={<BookAppointment/>} />
        <Route path="/bookservice/:sname/:price/:name" element={<BookAppointment/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path='*' element={<Nopage/>} />
      </Route>
      <Route path="/admin" element={<Admin/>} />
      <Route path="/register" element={<NewAdmin/>} />
      <Route path="/forgetpass" element={<Forgetpass/>} />
      <Route path="/admindashboard" element={<AdminDashboard/>}>
        <Route path='addservices' element={<Addservice/>} />
        <Route path='deservices' element={<Deleteservice/>} />
        <Route path='addmechanic' element={<Addmechanic/>} />
        <Route path='demechanic' element={<Deletemechanic/>} />
        <Route path='addblog' element={<Addblog/>} />
        <Route path='deblog' element={<Deleteblog/>} />
        <Route path='deservices/:sid' element={<Editservice/>} />
        <Route path='demechanic/:mid' element={<Editmechanic/>} />
        <Route path='deblog/:bid' element={<Editblog/>} />
      </Route>
    </Routes>
  )
}

export default Routing