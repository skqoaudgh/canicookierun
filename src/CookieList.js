import React from 'react';
import CookieItem from './CookieItem.js';
import './List.css';

const List = ({ cookies, grade }) => {
  const filteredCookies = grade === 'allGrade' ? cookies : cookies.filter(cookie => cookie.grade === grade);

  return (
    <React.Fragment>
      <h2 className="itemTitle">쿠키</h2>
      <ul className="itemList">{filteredCookies.map(cookie => <CookieItem key={cookie.id} cookie={cookie} />)}</ul>
    </React.Fragment>
  );
}

export default List;