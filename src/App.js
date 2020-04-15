import React, { useState } from 'react';
import CookieList from './Cookie/CookieList';
import PetList from './Pet/PetList';
import Footer from './Footer/Footer';

import cookies from './api/cookies.json';
import pets from './api/pets.json';

import './App.css';

function App() {
  const [type, setType] = useState('cookie');
  const [grade, setGrade] = useState('allGrade');

  function handleTypeChange(event) {
    setType(event.target.value);
    setGrade('allGrade');
  }

  function handleGradeChange(event) {
    setGrade(event.target.value);
  }

  return (
    <div className="main">
      <h1>Can I Cookie Run?</h1>
      <div className="mainWrapper">
        <div className="selectWrapper">
          <div className="selectList">
            <div>
              <select value={type} onChange={handleTypeChange}>
                <option value="allType">전체</option>
                <option value="cookie">쿠키</option>
                <option value="pet">펫</option>
              </select>
            </div>
            <div>
              <select value={grade} onChange={handleGradeChange}>
                <option value="allGrade">전체등급</option>
                <option value="Common">Common</option>
                <option value="Rare">Rare</option>
                <option value="Epic">Epic</option>
                <option value="Legendary">Legendary</option>
                <option value="Special">Special</option>
              </select>
            </div>
          </div>
        </div>
        <main className="list">
          {type === 'allType' ? (
            <React.Fragment>
              <CookieList cookies={cookies} pets={pets} grade={grade} />
              <PetList cookies={cookies} pets={pets} grade={grade} />
            </React.Fragment>
          ) : type === 'cookie' ? (
            <CookieList cookies={cookies} pets={pets} grade={grade} />
          ) : (
            <PetList cookies={cookies} pets={pets} grade={grade} />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
