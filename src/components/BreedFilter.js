import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import '../assets/css/BreedFilter.scss';

const BreedFilter = ({
  handleSetFilter,
  breeds,
  category,
  setCategory,
}) => (
  <div className="row cross-center nav-container">
    <div>Breed: </div>
    {breeds.map((breed) => (
      <button type="button" className={`link nav ${category === breed.name ? 'selected-nav' : ''}`} key={Math.random()} onClick={() => { setCategory(breed.name); handleSetFilter(breed.name); }}>{breed.name}</button>
    ))}
  </div>
);

BreedFilter.propTypes = {
  handleSetFilter: PropTypes.func.isRequired,
  breeds: PropTypes.instanceOf(Array).isRequired,
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  breeds: state.breeds,
});

const mapDispatchToProps = (dispatch) => ({
  handleSetFilter: (filter) => {
    dispatch(setFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedFilter);
