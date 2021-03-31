import React, {useState} from 'react';
import NameForm from './NameForm';
import Thanks from './Thanks';
import Products from './Products';
import Legal from './Legal';
import Footer from './Footer';
import Form from './FormInputs';
import Contact from './Contact';
import PhotoBooth from './PhotoBooth';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom"

function App() {
  const [namer, setNamer] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setNamer(e.target.value);
    
  }

  return (
    <Router>
    <div className="App">
      <header class="container-fluid bg-gray-800">
        <div class="container mx-auto bg-gray-800 p-5">
          <nav class="flex flex-row md:justify-between">
      <Link to ="/"><img src="logo.png" alt=""></img></Link>
        <ul class="flex text-white pt-8">
          <li class="pr-5 hover:text-red-600">
            <Link to="/form">Contest</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to="/photobooth">Photobooth</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to="/products">Product</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li class="pr-5 hover:text-red-600">
            <Link to="/legal">Legal</Link>
          </li>
        </ul>
      </nav>
      </div>
     
      </header>
      

    
    <Switch>
      <Route exact path="/" children={<NameForm handleChange={(e)=>handleChange(e)} />} />
      <Route path="/thanks" children={<Thanks namer={namer} />} />
      <Route path="/products" component={Products} />
      <Route path="/legal" component={Legal} />
      <Route path="/form" component={Form} />
      <Route path="/contact" component={Contact} />
      <Route path="/photobooth" component={PhotoBooth} />
      
    </Switch>
    
    <Footer />
    </div>
    </Router>
 
  
  
  );
}

export default App;
