import React, { Component } from 'react'
import Dataindex from '../components/Pages/Dataindex'
import Master from '../components/Pages/Master'
import Form from '../components/Pages/Form'
import Data from '../components/Pages/Data'
import { Link,Route } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper" style={{ minHeight: 242 }}>
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Starter Page</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Starter Page</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
                <Route path="/" exact component={Master}/>
                <Route path="/activePage" exact  component={Dataindex} />
                <Route path="/Form" exact component={Form}/>
                <Route path="/data" exact component={Data}/>
            </div>
          </div>
        </div>
        <aside className="control-sidebar control-sidebar-dark" style={{ display: 'none' }}>
          <div className="p-3">
            <h5>Title</h5>
            <p>Sidebar content</p>
          </div>
        </aside>


      </div>

    )
  }
}
