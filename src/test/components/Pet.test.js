import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Pet from '../../components/Pet';
import reducer from '../../reducers/index';

it('renders correctly', () => {
  const store = createStore(reducer);
  const tree = renderer
    .create((
      <Provider store={store}>
        <Router><Pet pet={{ pet: {}, breed: {} }} /></Router>
      </Provider>
    ))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
