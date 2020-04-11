import React, { useState } from "react";
import CookieList from "./CookieList";
import PetList from "./PetList";

import cookies from "./api/cookies.json";
import pets from "./api/pets.json";

function App() {
  const [type, setType] = useState("allType");
  const [grade, setGrade] = useState("allGrade");

  function handleTypeChange(event) {
    setType(event.target.value);
    setGrade("allGrade");
  }

  function handleGradeChange(event) {
    setGrade(event.target.value);
  }

  return (
    <React.Fragment>
      <h1 id="title">Can I Cookie Run?</h1>
      <select value={type} onChange={handleTypeChange}>
        <option value="allType">전체</option>
        <option value="cookie">쿠키</option>
        <option value="pet">펫</option>
      </select>
      <select value={grade} onChange={handleGradeChange}>
        <option value="allGrade">전체등급</option>
        <option value="Common">Common</option>
        <option value="Rare">Rare</option>
        <option value="Epic">Epic</option>
        <option value="Legendary">Legendary</option>
        <option value="Special">Special</option>
      </select>
      <main id="list">
        {type === "allType" ? (
          <React.Fragment>
            <CookieList cookies={cookies} grade={grade} />
            <PetList pets={pets} grade={grade} />
          </React.Fragment>
        ) : type === "cookie" ? (
          <CookieList cookies={cookies} grade={grade} />
        ) : (
          <PetList pets={pets} grade={grade} />
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
