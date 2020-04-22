import React from 'react';
import CookieItem from './CookieItem.js';
import './List.css';

const List = ({ cookies, pets, grade, search }) => {
  let filteredCookies =
    search === ''
      ? cookies
      : cookies.filter((cookie) => cookie.name.indexOf(search) > -1);
  filteredCookies =
    grade === 'allGrade'
      ? filteredCookies
      : filteredCookies.filter((cookie) => cookie.grade === grade);

  return (
    <React.Fragment>
      <h2 className="itemTitle">쿠키</h2>
      <ul className="itemList">
        {filteredCookies.map((cookie) => (
          <CookieItem
            key={cookie.id}
            cookie={cookie}
            pet={pets[cookie.partner]}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
