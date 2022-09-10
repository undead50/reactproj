import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
          <div>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="" />
      </div>
      <div className="info">
        <Link to="/#" className="d-block">Alexander Pierce</Link>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div><div className="sidebar-search-results"><div className="list-group"><a href="/#" className="list-group-item"><div className="search-title"><strong className="text-light" />N<strong className="text-light" />o<strong className="text-light" /> <strong className="text-light" />e<strong className="text-light" />l<strong className="text-light" />e<strong className="text-light" />m<strong className="text-light" />e<strong className="text-light" />n<strong className="text-light" />t<strong className="text-light" /> <strong className="text-light" />f<strong className="text-light" />o<strong className="text-light" />u<strong className="text-light" />n<strong className="text-light" />d<strong className="text-light" />!<strong className="text-light" /></div><div className="search-path" /></a></div></div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="/#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Starter Pages
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/activePage" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Active Page</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Form" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inactive Page</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/data" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Data List</p>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/"className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Simple Link
              <span className="right badge badge-danger">New</span>
            </p>
          </Link>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

</div>

        )
    }
}
