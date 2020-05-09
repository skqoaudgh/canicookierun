import React, { useContext } from 'react';
import LazyLoad from 'react-lazyload';

import CookieItem from './CookieItem.js';
import { ListContext } from '../../../contexts/ListContext';

import './List.css';

const CookieList = () => {
  const { cookies, pets, grade, search, order } = useContext(ListContext);

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
      filteredCookies.sort((a, b) => new Date(a.release) - new Date(b.release));
      break;
    case 'release_desc':
      filteredCookies.sort((a, b) => new Date(b.release) - new Date(a.release));
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
          <LazyLoad
            key={cookie.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<div />}
          >
            <CookieItem
              key={cookie.id}
              cookie={cookie}
              pet={pets[cookie.partner]}
            />
          </LazyLoad>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default CookieList;
