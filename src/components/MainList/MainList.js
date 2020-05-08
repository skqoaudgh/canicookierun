import React, { Fragment } from 'react';

import CookieList from './Cookie/CookieList';
import PetList from './Pet/PetList';
import TreasureList from './Treasure/TreasureList';

const MainList = ({ type, cookies, pets, treasures, grade, search, order }) => {
  return (
    <Fragment>
      {type === 'allType' ? (
        <React.Fragment>
          <CookieList
            cookies={cookies}
            pets={pets}
            grade={grade}
            search={search}
            order={order}
          />
          <PetList
            cookies={cookies}
            pets={pets}
            grade={grade}
            search={search}
            order={order}
          />
          <TreasureList
            treasures={treasures}
            grade={grade}
            search={search}
            order={order}
          />
        </React.Fragment>
      ) : type === 'cookie' ? (
        <CookieList
          cookies={cookies}
          pets={pets}
          grade={grade}
          search={search}
          order={order}
        />
      ) : type === 'pet' ? (
        <PetList
          cookies={cookies}
          pets={pets}
          grade={grade}
          search={search}
          order={order}
        />
      ) : (
        <TreasureList
          treasures={treasures}
          grade={grade}
          search={search}
          order={order}
        />
      )}
    </Fragment>
  );
};

export default MainList;
