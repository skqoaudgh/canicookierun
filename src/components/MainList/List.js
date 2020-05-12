import React, { useEffect } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';

import Item from './Item.js';

import './List.css';

const List = ({ title, type, list }) => {
  useEffect(() => forceCheck(), [list]);

  return (
    <React.Fragment>
      <h2 className="itemTitle">{title}</h2>
      <ul className="itemList">
        {list.map((item) => (
          <LazyLoad
            key={item.id}
            height={100}
            offset={100}
            placeholder={<div />}
          >
            <Item key={item.id} type={type} item={item} />
          </LazyLoad>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
