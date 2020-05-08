import React, { useContext } from 'react';
import LazyLoad from 'react-lazyload';

import Spinner from '../Spinner/Spinner';
import PetItem from './PetItem.js';
import { ListContext } from '../../../contexts/ListContext';

import '../Cookie/List.css';

const PetList = () => {
  const { cookies, pets, grade, search, order } = useContext(ListContext);

  let filteredPets =
    search === ''
      ? JSON.parse(JSON.stringify(pets))
      : pets.filter((pet) => pet.name.indexOf(search) > -1);
  filteredPets =
    grade === 'allGrade'
      ? filteredPets
      : filteredPets.filter((pet) => pet.grade === grade);

  switch (order) {
    case 'release_asc':
      filteredPets.sort((a, b) => {
        const a_release =
          a.partner === -1 ? a.release : cookies[a.partner].release;
        const b_release =
          b.partner === -1 ? b.release : cookies[b.partner].release;
        return new Date(a_release) - new Date(b_release);
      });
      break;
    case 'release_desc':
      filteredPets.sort((a, b) => {
        const a_release =
          a.partner === -1 ? a.release : cookies[a.partner].release;
        const b_release =
          b.partner === -1 ? b.release : cookies[b.partner].release;
        return new Date(b_release) - new Date(a_release);
      });
      break;
    case 'name_asc':
      filteredPets.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name_desc':
      filteredPets.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <h2 className="itemTitle">펫</h2>
      <ul className="itemList">
        {filteredPets.map((pet) => (
          <LazyLoad
            key={pet.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Spinner />}
          >
            <PetItem key={pet.id} cookie={cookies[pet.partner]} pet={pet} />
          </LazyLoad>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PetList;
