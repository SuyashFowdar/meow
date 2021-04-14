import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/css/Pet.scss';

const Pet = ({ pet }) => (
  <Link to={`/pet/${pet.pet.id}`} className="pet-item bg-cover col main-end" style={{ backgroundImage: `url(${pet.pet.url})` }}>
    <div className="breed">{pet.breed.name}</div>
  </Link>
);

Pet.defaultProps = {
  pet: {},
};

Pet.propTypes = {
  pet: PropTypes.instanceOf(Object),
};

export default Pet;
