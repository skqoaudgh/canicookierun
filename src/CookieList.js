import React from 'react';
import CookieItem from './CookieItem.js';

const List = ({ cookies, grade }) => {
  const filteredCookies = grade === 'allGrade' ? cookies : cookies.filter(cookie => cookie.grade === grade);

  return (
    <React.Fragment>
      <h2>쿠키</h2>
      <div>{filteredCookies.map(cookie => <CookieItem key={cookie.id} cookie={cookie} />)}</div>
    </React.Fragment>
  );
}

export default List;