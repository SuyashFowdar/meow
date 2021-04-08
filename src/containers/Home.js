import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import Pet from '../components/Pet';
import BreedFilter from '../components/BreedFilter';
import '../assets/css/Home.scss';

const Home = () => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState('All');
  const [loadCount, setLoadCount] = useState(0);
  const pets = useSelector((state) => state.pets);
  const showList = () => {
    setLoadCount(loadCount + 1);
    return _.slice(pets, (loadCount * 9), (((loadCount + 1) * 9) - 1));
  };

  useEffect(() => {
    if (category === 'All') {
      setList(_.slice(pets, ((loadCount - 1) * 9), ((loadCount * 9) - 1)));
    } else {
      setList(_.filter(pets, (pet) => pet.breed.name === category));
    }
  }, [pets, category]);

  return (
    <>
      <BreedFilter category={category} setCategory={setCategory} />
      <div className="row wrap">
        {list.map((pet) => (
          <Pet key={pet.breed.id + pet.pet.id} pet={pet} />
        ))}
      </div>
      {category === 'All'
        ? <button type="button" onClick={() => { setList(_.concat(list, showList())); }} className="show-more link">Show more</button>
        : <div />}
    </>
  );
};

export default Home;
