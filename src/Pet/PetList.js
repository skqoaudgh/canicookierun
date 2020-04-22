import React from 'react';
import PetItem from './PetItem.js';
import '../Cookie/List.css';

const PetList = ({ cookies, pets, grade, search }) => {
  let filteredPets =
    search === '' ? pets : pets.filter((pet) => pet.name.indexOf(search) > -1);
  filteredPets =
    grade === 'allGrade'
      ? filteredPets
      : filteredPets.filter((pet) => pet.grade === grade);

  return (
    <React.Fragment>
      <h2 className="itemTitle">펫</h2>
      <ul className="itemList">
        {filteredPets.map((pet) => (
          <PetItem key={pet.id} cookie={cookies[pet.partner]} pet={pet} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PetList;
