import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/'
import Footer from './components/Footer/'
import About from './components/About'
import NavBar from './components/NavBar/'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'



class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects/" component={Projects} />
        </Switch>
        <Footer />
      </BrowserRouter>

    );
  }
}

export default App;
