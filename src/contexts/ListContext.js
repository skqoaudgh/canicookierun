import React, { createContext, useState } from 'react';

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [cookies, setCookies] = useState(require('../api/cookies.json'));
  const [pets, setPets] = useState(require('../api/pets.json'));
  const [treasures, setTreasures] = useState(require('../api/treasures.json'));

  const [type, setType] = useState('cookie');
  const [grade, setGrade] = useState('allGrade');
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('release_asc');

  const handleTypeChange = (event) => {
    setType(event.target.value);
    setGrade('allGrade');
    setOrder('release_asc');
    setSearch('');
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
    setSearch('');
  };

  const handleSummit = (event) => {
    setSearch(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <ListContext.Provider
      value={{
        cookies,
        pets,
        treasures,
        type,
        handleTypeChange,
        grade,
        handleGradeChange,
        search,
        handleSummit,
        order,
        handleOrderChange,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
