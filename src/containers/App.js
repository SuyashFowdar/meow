import React from 'react';
import icon from '../assets/img/icon.png';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Pet from '../components/Pet';

const App = () => (
  <div>
    <Router>
      <header>
        <img src={icon} alt=""/>
        <div>Woof.com</div>
        <Link to="/">Home</Link>
        <Link to="/pet/1">Pet</Link>
      </header>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/pet/:id"><Pet /></Route>
      </Switch>
    </Router>
  </div>
);

export default App;
