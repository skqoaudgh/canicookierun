import React, { useState, Fragment } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainList from './components/MainList/MainList';

import cookies from './api/cookies.json';
import pets from './api/pets.json';
import treasures from './api/treasures.json';

import './App.css';

function App() {
  const [type, setType] = useState('cookie');
  const [grade, setGrade] = useState('allGrade');
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('release_asc');

  const handleTypeChange = (event) => {
    setType(event.target.value);
    setGrade('allGrade');
    setSearch('');
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
    setSearch('');
  };

  const handleSummit = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setSearch(event.target.value);
    }
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <Fragment>
      <header>
        <Header
          type={type}
          handleTypeChange={handleTypeChange}
          grade={grade}
          handleGradeChange={handleGradeChange}
          handleSummit={handleSummit}
          order={order}
          handleOrderChange={handleOrderChange}
        />
      </header>
      <main>
        <MainList
          type={type}
          cookies={cookies}
          pets={pets}
          treasures={treasures}
          grade={grade}
          search={search}
          order={order}
        />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
