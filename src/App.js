import React, { useState } from 'react';

import Form from './Form/Form';
import CookieList from './Cookie/CookieList';
import PetList from './Pet/PetList';
import TreasureList from './Treasure/TreasureList';
import Footer from './Footer/Footer';

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
    <div className="main">
      <h1>Can I Cookie Run?</h1>
      <div className="mainWrapper">
        <Form
          type={type}
          handleTypeChange={handleTypeChange}
          grade={grade}
          handleGradeChange={handleGradeChange}
          handleSummit={handleSummit}
          order={order}
          handleOrderChange={handleOrderChange}
        />
        <main className="list">
          {type === 'allType' ? (
            <React.Fragment>
              <CookieList
                cookies={cookies}
                pets={pets}
                grade={grade}
                search={search}
                order={order}
              />
              <PetList
                cookies={cookies}
                pets={pets}
                grade={grade}
                search={search}
                order={order}
              />
              <TreasureList
                treasures={treasures}
                grade={grade}
                search={search}
                order={order}
              />
            </React.Fragment>
          ) : type === 'cookie' ? (
            <CookieList
              cookies={cookies}
              pets={pets}
              grade={grade}
              search={search}
              order={order}
            />
          ) : type === 'pet' ? (
            <PetList
              cookies={cookies}
              pets={pets}
              grade={grade}
              search={search}
              order={order}
            />
          ) : (
            <TreasureList
              treasures={treasures}
              grade={grade}
              search={search}
              order={order}
            />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
