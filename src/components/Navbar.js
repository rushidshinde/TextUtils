import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg`} style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{color : props.mode === 'light' ? '#071E3D' : '#ffffff'}} to="/">{props.navBrand}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" style={{color : props.mode === 'light' ? '#071E3D' : '#ffffff'}} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color : props.mode === 'light' ? '#071E3D' : '#ffffff'}} to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch`} style={{color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="darkModeCheckSwitch" />
                        <label className="form-check-label" htmlFor="darkModeCheckSwitch"><i class={props.mode === 'light' ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'}></i>{props.mode === 'light' ? ' Dark Mode' : ' Light Mode'}</label>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
Navbar.propTypes = {
    navBrand: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  navBrand: 'set navbar brand here'
};
