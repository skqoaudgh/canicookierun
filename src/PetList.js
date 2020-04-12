import React from 'react';
import PetItem from './PetItem.js';
import './List.css';

const PetList = ({ cookies, pets, grade }) => {
  const filteredPet = grade === 'allGrade' ? pets : pets.filter(pet => pet.grade === grade);

  return (
    <React.Fragment>
      <h2 className="itemTitle">펫</h2>
      <ul className="itemList">{filteredPet.map(pet => <PetItem key={pet.id} cookie={cookies[pet.partner]} pet={pet} />)}</ul>
    </React.Fragment>
  );
}

export default PetList;