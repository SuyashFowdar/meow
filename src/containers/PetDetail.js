import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../assets/css/PetDetail.scss';

const PetDetail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const pets = useSelector((state) => state.pets);
  useEffect(() => {
    console.log('Detail');
    for (let i = 0; i < pets.length; i += 1) {
      if (pets[i].pet.id === id) {
        setPet(pets[i]);
        break;
      }
    }
  });
  return (
    <>
      {pet.pet
        ? (
          <div className="pet-detail bg-cover row cross-center main-end" style={{ backgroundImage: `url(${pet.pet.url})` }}>
            <div className="content">
              <div className="w-100 h-100">
                {Object.keys(pet.pet.breeds[0]).map((key) => {
                  const keyVal = key.replace('_', ' ');
                  const elem = pet.pet.breeds[0];
                  if (elem.weight) elem.weight = elem.weight.metric;
                  return (
                    <div key={key} className="row elem">
                      <div>{keyVal}</div>
                      <div className="flex">{pet.pet.breeds[0][key]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )
        : <div />}
    </>
  );
};

export default PetDetail;
