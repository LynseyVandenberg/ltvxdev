import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/'
import Footer from './components/Footer/'
import About from './components/About'
import NavBar from './components/NavBar/'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.css';



function App() {
  return (
    <Router>
         
    <div className="app">
<Router basename='https://lynseyvandenberg.github.io/ltvxdev/'>
   <NavBar />
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/resume" component={Resume} />
  <Route path="/projects" component={Projects} />
</Switch>
<Footer />
</Router>
    </div>
    </Router>
  );
}

export default App;
