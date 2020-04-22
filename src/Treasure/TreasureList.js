import React from 'react';
import TreasureItem from './TreasureItem.js';
import '../Cookie/List.css';

const TreasureList = ({ treasures, grade, search }) => {
  let filteredTreaures =
    search === ''
      ? treasures
      : treasures.filter((treaure) => treaure.name.indexOf(search) > -1);
  filteredTreaures =
    grade === 'allGrade'
      ? filteredTreaures
      : filteredTreaures.filter((treaure) => treaure.grade === grade);

  return (
    <React.Fragment>
      <h2 className="itemTitle">보물</h2>
      <ul className="itemList">
        {filteredTreaures.map((treasure) => (
          <TreasureItem key={treasure.id} treasure={treasure} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TreasureList;
