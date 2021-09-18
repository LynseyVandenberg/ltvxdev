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
import Header from './components/Header'



class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header/>
          <NavBar/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
