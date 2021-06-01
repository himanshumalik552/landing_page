import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer ';
import Common from './Common'


const App =() => 
{
  return (
  <>
  <Navbar/>
 <Switch>
<Route exact path="/" component={Common} />
<Route exact path="/about" component={About} />
<Route exact path="/service" component={Service} />
<Route exact path="/contact" component={Contact} />

<Redirect to ="/" />
 </Switch> 

 <Footer/>
  </>                 
  );
};

export default App; 


