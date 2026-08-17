import React from 'react'
import { NavLink } from 'react-router-dom'

const Nopage = () => {
  return (
    <>
        <div className={Styles.notfound}>
            <div>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Opps! the page your looking for doesn't exist or has been moved.</p>
                <NavLink to='/'>
                    <button>Go Back to Home</button>
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Nopage
