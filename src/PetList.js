import React from 'react';
import PetItem from './PetItem.js';

const PetList = ({ pets, grade }) => {
  const filteredPet = grade === 'allGrade' ? pets : pets.filter(pet => pet.grade === grade);

  return (
    <React.Fragment>
      <h2>펫</h2>
      <div>{filteredPet.map(pet => <PetItem key={pet.id} pet={pet} />)}</div>
    </React.Fragment>
  );
}

export default PetList;