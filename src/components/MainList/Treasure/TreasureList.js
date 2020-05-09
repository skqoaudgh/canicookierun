import React, { useContext } from 'react';
import LazyLoad from 'react-lazyload';

import TreasureItem from './TreasureItem.js';
import { ListContext } from '../../../contexts/ListContext';

import '../Cookie/List.css';

const TreasureList = () => {
  const { treasures, grade, search, order } = useContext(ListContext);

  let filteredTreaures =
    search === ''
      ? JSON.parse(JSON.stringify(treasures))
      : treasures.filter((treaure) => treaure.name.indexOf(search) > -1);
  filteredTreaures =
    grade === 'allGrade'
      ? filteredTreaures
      : filteredTreaures.filter((treaure) => treaure.grade === grade);

  switch (order) {
    case 'release_asc':
      filteredTreaures.sort(
        (a, b) => new Date(a.release) - new Date(b.release)
      );
      break;
    case 'release_desc':
      filteredTreaures.sort(
        (a, b) => new Date(b.release) - new Date(a.release)
      );
      break;
    case 'name_asc':
      filteredTreaures.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name_desc':
      filteredTreaures.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <h2 className="itemTitle">보물</h2>
      <ul className="itemList">
        {filteredTreaures.map((treasure) => (
          <LazyLoad
            key={treasure.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<div />}
          >
            <TreasureItem key={treasure.id} treasure={treasure} />
          </LazyLoad>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TreasureList;
