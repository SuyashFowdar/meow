export const addPet = (pet) => ({
  type: 'ADD_PET',
  pet,
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter,
});
