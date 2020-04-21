import React from 'react';
import TreasureItem from './TreasureItem.js';
import '../Cookie/List.css';

const TreasureList = ({ treasures, grade }) => {
  const filteredTreaure =
    grade === 'allGrade'
      ? treasures
      : treasures.filter((treasure) => treasure.grade === grade);

  return (
    <React.Fragment>
      <h2 className="itemTitle">보물</h2>
      <ul className="itemList">
        {filteredTreaure.map((treasure) => (
          <TreasureItem key={treasure.id} treasure={treasure} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TreasureList;
