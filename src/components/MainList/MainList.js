import React, { Fragment, useContext } from 'react';

import CookieList from './Cookie/CookieList';
import PetList from './Pet/PetList';
import TreasureList from './Treasure/TreasureList';
import { ListContext } from '../../contexts/ListContext';

const MainList = () => {
  const { type } = useContext(ListContext);

  return (
    <Fragment>
      {type === 'allType' ? (
        <React.Fragment>
          <CookieList />
          <PetList />
          <TreasureList />
        </React.Fragment>
      ) : type === 'cookie' ? (
        <CookieList />
      ) : type === 'pet' ? (
        <PetList />
      ) : (
        <TreasureList />
      )}
    </Fragment>
  );
};

export default MainList;
