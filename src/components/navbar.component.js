import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="/react-usereducer/" className="navbar-brand">tradecoder</a>
                </div>
                    <button data-target="#main-menu" data-toggle="collapse" className="navbar-toggler"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="main-menu" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to="/react-usereducer/counter" className="nav-link">Counter</Link></li>
                        </ul>
                    </div>       
            </div>
        </nav>
    );
}