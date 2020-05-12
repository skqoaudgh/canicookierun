import React, { useEffect } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';

import Item from './Item.js';

import './List.css';

const List = ({ title, type, list, display }) => {
  useEffect(() => forceCheck(), [list]);

  const hidden = {
    display: 'none',
  };

  const visibility = {
    display: 'block',
    visibility: 'visible',
  };

  return (
    <div style={display === 'none' ? hidden : visibility}>
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
    </div>
  );
};

export default List;
