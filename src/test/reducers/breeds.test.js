import breedsReducer from '../../reducers/breeds';

it('checks for default breeds', () => {
  const defaultBreeds = [{ name: 'All' }, { name: 'Abyssinian', id: 'abys' }, { name: 'Aegean', id: 'aege' }, { name: 'American Shorthair', id: 'asho' }, { name: 'British Shorthair', id: 'bsho' }, { name: 'Devon Rex', id: 'drex' }, { name: 'Exotic Shorthair', id: 'esho' }, { name: 'Maine Coon', id: 'mcoo' }, { name: 'Ragdoll', id: 'ragd' }, { name: 'Scottish Fold', id: 'sfol' }, { name: 'Persian', id: 'pers' }];
  const breeds = breedsReducer();
  expect(breeds).toEqual(defaultBreeds);
});
