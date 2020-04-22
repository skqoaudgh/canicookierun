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

  function handleTypeChange(event) {
    setType(event.target.value);
    setGrade('allGrade');
    setSearch('');
  }

  function handleGradeChange(event) {
    setGrade(event.target.value);
    setSearch('');
  }

  function handleSummit(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      setSearch(event.target.value);
    }
  }

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
        />
        <main className="list">
          {type === 'allType' ? (
            <React.Fragment>
              <CookieList
                cookies={cookies}
                pets={pets}
                grade={grade}
                search={search}
              />
              <PetList
                cookies={cookies}
                pets={pets}
                grade={grade}
                search={search}
              />
              <TreasureList
                treasures={treasures}
                grade={grade}
                search={search}
              />
            </React.Fragment>
          ) : type === 'cookie' ? (
            <CookieList
              cookies={cookies}
              pets={pets}
              grade={grade}
              search={search}
            />
          ) : type === 'pet' ? (
            <PetList
              cookies={cookies}
              pets={pets}
              grade={grade}
              search={search}
            />
          ) : (
            <TreasureList treasures={treasures} grade={grade} search={search} />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
