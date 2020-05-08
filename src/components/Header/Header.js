import React, { Fragment } from 'react';

import Form from './Form/Form';

import './Header.css';

const Header = ({
  type,
  handleTypeChange,
  grade,
  handleGradeChange,
  handleSummit,
  order,
  handleOrderChange,
}) => {
  return (
    <Fragment>
      <h1>Can I Cookie Run?</h1>
      <Form
        type={type}
        handleTypeChange={handleTypeChange}
        grade={grade}
        handleGradeChange={handleGradeChange}
        handleSummit={handleSummit}
        order={order}
        handleOrderChange={handleOrderChange}
      />
    </Fragment>
  );
};

export default Header;
