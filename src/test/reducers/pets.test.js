import petsReducer from '../../reducers/pets';

describe('an object', () => {
  it('checks for default state', () => {
    const pets = petsReducer([], { type: 'dummy' });
    expect(pets).toEqual([]);
  });

  it('adds new pet', () => {
    const pets = petsReducer([], { type: 'ADD_PET', pet: { name: 'pet' } });
    expect(pets).toEqual([{ name: 'pet' }]);
  });
});
