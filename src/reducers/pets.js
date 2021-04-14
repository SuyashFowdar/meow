import _ from 'lodash';

const petsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PET':
      return _.shuffle([...state, action.pet]);
    default:
      return state;
  }
};

export default petsReducer;
