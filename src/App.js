import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  link
}from "react-router-dom";

import {Home} from './componat/home';
// import {Contact} from './componat/Concat';
import {Topnav} from './componat/Topnav';             
import {Project} from './componat/project';             
import {Experience} from './componat/experience';             
import About  from './componat/about';
import Concat from './componat/Concat';


export default function App(){
  return (
    <Router>
      <div>
        <Topnav></Topnav>
        <Switch>
          <Route path="/Concat" element={<Concat/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
        </Switch>
      </div>
    </Router>
  );
}
