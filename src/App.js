import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import whyUs from './components/pages/whyUs';
import SignUp from './components/pages/SignUp';
import ContactUs from './components/pages/ContactUs';
import Consulting from './components/pages/Consulting';
import Development from './components/pages/Development';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/whyUs' component={whyUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/Consulting' component={Consulting} />
          <Route path='/Development' component={Development} />
        </Switch>
      </Router>
    </>
  );
}

export default App;