import React, { useContext } from 'react';

import List from './List';
import { ListContext } from '../../contexts/ListContext';
import { filtering } from '../../utilities/Filtering';

const ListContainer = () => {
  const { cookies, pets, treasures, type, search, grade, order } = useContext(
    ListContext
  );

  let filteredCookies =
    type === 'allType' || type === 'cookie'
      ? filtering(cookies, search, grade, order)
      : cookies;
  filteredCookies =
    type === 'allType' || type === 'cookie'
      ? filteredCookies.map((v) => {
          return { ...v, pet: pets[v.partner] };
        })
      : filteredCookies;
  let filteredPets =
    type === 'allType' || type === 'pet'
      ? filtering(
          pets.map((v) => {
            return {
              ...v,
              release: v.release ? v.release : cookies[v.partner].release,
            };
          }),
          search,
          grade,
          order
        )
      : pets;
  filteredPets =
    type === 'allType' || type === 'pet'
      ? filteredPets.map((v) => {
          return { ...v, cookie: cookies[v.partner] };
        })
      : filteredPets;
  let filteredTreasures =
    type === 'allType' || type === 'treasure'
      ? filtering(treasures, search, grade, order)
      : treasures;

  return (
    <main>
      <List
        title="쿠키"
        type="cookie"
        list={filteredCookies}
        display={type === 'allType' || type === 'cookie' ? 'visible' : 'none'}
      />
      <List
        title="펫"
        type="pet"
        list={filteredPets}
        display={type === 'allType' || type === 'pet' ? 'visible' : 'none'}
      />
      <List
        title="보물"
        type="treasure"
        list={filteredTreasures}
        display={type === 'allType' || type === 'treasure' ? 'visible' : 'none'}
      />
    </main>
  );
};

export default ListContainer;
