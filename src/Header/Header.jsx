import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./headerStyles.module.css";
import logo from "./Logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="Logo" />
            <span>LEON GARAGE</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles.navLink} nav-link ${isActive ? styles.active : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `${styles.navLink} nav-link ${isActive ? styles.active : ""}`
                  }
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/bookservice"
                  className={({ isActive }) =>
                    `${styles.navLink} nav-link ${isActive ? styles.active : ""}`
                  }
                >
                  Book Service
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `${styles.navLink} nav-link ${isActive ? styles.active : ""}`
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `${styles.navLink} nav-link ${isActive ? styles.active : ""}`
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    `${styles.navLink} nav-link ${isActive ? styles.active : ""}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item ms-lg-3">
                <NavLink to="/admin" className={styles.loginBtn}>
                  Login
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;