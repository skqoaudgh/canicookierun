import React from 'react';

import './Form.css';

const Form = ({
  type,
  handleTypeChange,
  grade,
  handleGradeChange,
  handleSummit,
}) => {
  return (
    <div className="formWrapper">
      <div className="selectList">
        <div>
          <select value={type} onChange={handleTypeChange}>
            <option value="allType">전체</option>
            <option value="cookie">쿠키</option>
            <option value="pet">펫</option>
            <option value="treasure">보물</option>
          </select>
        </div>
        <div>
          {type === 'treasure' ? (
            <select value={grade} onChange={handleGradeChange}>
              <option value="allGrade">전체등급</option>
              <option value="Rare">Rare</option>
              <option value="Epic">Epic</option>
              <option value="Special">Special</option>
            </select>
          ) : (
            <select value={grade} onChange={handleGradeChange}>
              <option value="allGrade">전체등급</option>
              <option value="Common">Common</option>
              <option value="Rare">Rare</option>
              <option value="Epic">Epic</option>
              <option value="Legendary">Legendary</option>
              <option value="Special">Special</option>
            </select>
          )}
        </div>
      </div>
      <div className="searchForm">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onKeyUp={handleSummit}
        />
      </div>
    </div>
  );
};

export default Form;
