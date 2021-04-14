import { combineReducers } from 'redux';
import pets from './pets';
import breeds from './breeds';

export default combineReducers({ pets, breeds });
