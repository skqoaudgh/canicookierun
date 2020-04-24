import React from 'react';
import CookieItem from './CookieItem.js';
import './List.css';

const List = ({ cookies, pets, grade, search, order }) => {
  let filteredCookies =
    search === ''
      ? JSON.parse(JSON.stringify(cookies))
      : cookies.filter((cookie) => cookie.name.indexOf(search) > -1);
  filteredCookies =
    grade === 'allGrade'
      ? filteredCookies
      : filteredCookies.filter((cookie) => cookie.grade === grade);

  switch (order) {
    case 'release_asc':
      filteredCookies.sort((a, b) => a.release - b.release);
      break;
    case 'release_desc':
      filteredCookies.sort((a, b) => b.release - a.release);
      break;
    case 'name_asc':
      filteredCookies.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name_desc':
      filteredCookies.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'health_asc':
      filteredCookies.sort(
        (a, b) => a.health.split('~')[1] - b.health.split('~')[1]
      );
      break;
    case 'health_desc':
      filteredCookies.sort(
        (a, b) => b.health.split('~')[1] - a.health.split('~')[1]
      );
      break;
    default:
      break;
  }

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
