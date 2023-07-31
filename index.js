import ReactDOM from 'react-dom';
import React from 'react';
// import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, NavLink, Switch} from 'react-router-dom';
import Kdapph from './home';
import Kdappa from './about';
import Kdappj from './joinus';
import './home.css';
const routing=(
    <Router>
        <div>
            <Routes>
                <Route path='/' element={<Kdapph/>}/>
                <Route path='/about' element={<Kdappa/>}/>
                <Route path='/joinus' element={<Kdappj/>}/>
            </Routes>
        </div>
    </Router>
)
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import routing from './rout';
// ReactDOM.render(routing,document.getElementById("root"));
ReactDOM.render(routing,document.getElementById("root"));