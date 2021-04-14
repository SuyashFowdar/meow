import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Home';
import PetDetail from './PetDetail';
import { addPet } from '../actions';
import icon from '../assets/img/icon.png';
import '../assets/css/App.scss';

const App = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);
  useEffect(() => {
    for (let i = 0; i < breeds.length; i += 1) {
      if (breeds[i].id) {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_id=${breeds[i].id}&api_key=993497a8-ea48-4a4a-97cb-4bd832e1b755`)
          .then((response) => response.json())
          .then((response) => {
            for (let j = 0; j < response.length; j += 1) {
              dispatch(addPet({ pet: response[j], breed: breeds[i] }));
            }
          });
      }
    }
  });

  return (
    <div>
      <Router>
        <header>
          <Link to="/" className="logo row cross-center shadow-5">
            <img src={icon} alt="" />
            eow.com
          </Link>
        </header>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/pet/:id"><PetDetail /></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
