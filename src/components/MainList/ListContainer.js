import React, { useContext } from 'react';

import List from './List';
import { ListContext } from '../../contexts/ListContext';
import { filtering } from '../../utilities/Filtering';

const ListContainer = () => {
  const { cookies, pets, treasures, type, search, grade, order } = useContext(
    ListContext
  );

  let filteredCookies = filtering(cookies, search, grade, order);
  filteredCookies = filteredCookies.map((v) => {
    return { ...v, pet: pets[v.partner] };
  });
  let filteredPets = filtering(
    pets.map((v) => {
      return {
        ...v,
        release: v.release ? v.release : cookies[v.partner].release,
      };
    }),
    search,
    grade,
    order
  );
  filteredPets = filteredPets.map((v) => {
    return { ...v, cookie: cookies[v.partner] };
  });
  let filteredTreasures = filtering(treasures, search, grade, order);

  return (
    <main>
      {type === 'allType' ? (
        <React.Fragment>
          <List title="쿠키" type="cookie" list={filteredCookies} />
          <List title="펫" type="pet" list={filteredPets} />
          <List title="보물" type="treasure" list={filteredTreasures} />
        </React.Fragment>
      ) : type === 'cookie' ? (
        <List title="쿠키" type="cookie" list={filteredCookies} />
      ) : type === 'pet' ? (
        <List title="펫" type="pet" list={filteredPets} />
      ) : (
        <List title="보물" type="treasure" list={filteredTreasures} />
      )}
    </main>
  );
};

export default ListContainer;
