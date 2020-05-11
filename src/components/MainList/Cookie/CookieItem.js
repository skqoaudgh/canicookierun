import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

import ModalCookie from '../../Modal/ModalCookie';

import './Item.css';

import icon_hp from '../../../assets/icon/heart.svg';
import icon_skill from '../../../assets/icon/magic.svg';
import icon_candy from '../../../assets/icon/candy.svg';
import icon_lock from '../../../assets/icon/lock.svg';

const CookieItem = ({ cookie, pet }) => {
  const [modalPosition, setModalPosition] = useState([0, 0]);

  const handleImageLoaded = (event) => {
    event.target.classList.add('loaded');
  };

  const handleMouseEnter = (event) => {
    setModalPosition([
      event.target.offsetLeft,
      event.target.getBoundingClientRect().top + event.target.offsetHeight + 10,
    ]);
  };

  const handleMouseLeave = (event) => {
    if (modalPosition[0] > 0) {
      setModalPosition([0, 0]);
    }
  };

  return (
    <React.Fragment>
      <ModalCookie
        isOpen={modalPosition[0] > 0}
        pet={pet}
        bonus={cookie.bonus}
        left={modalPosition[0]}
        top={modalPosition[1]}
      />
      <li className="listItem">
        <LazyLoad
          placeholder={
            <img src={require('../../../assets/icon/empty.png')} alt="..." />
          }
          once={true}
        >
          <section className="item">
            <figure className="imageWrapper-cookie">
              <img
                src={require(`../../../assets/cookie/${cookie.imageURL}`)}
                alt={cookie.name}
                title={cookie.name}
                onLoad={handleImageLoaded}
              />
            </figure>
            <div className="infoWrapper">
              <div className="info-title">
                <div className="info-first">
                  <span className="itemName">{cookie.name}</span>
                  <div className={`gradeContainer ${cookie.grade}`}>
                    <strong>{cookie.grade}</strong>
                  </div>
                </div>
                {cookie.partner !== -1 ? (
                  <span
                    className="partner"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    짝꿍펫
                  </span>
                ) : null}
              </div>
              <ul className="info-detail">
                <li>
                  <img
                    src={icon_hp}
                    alt="체력"
                    title="체력"
                    onLoad={handleImageLoaded}
                  />
                  {cookie.health}
                </li>
                <li>
                  <img
                    src={icon_skill}
                    alt="쿠키능력"
                    title="쿠키능력"
                    onLoad={handleImageLoaded}
                  />
                  {cookie.skill}
                </li>
                <li>
                  <img
                    src={icon_candy}
                    alt="마법사탕"
                    title="마법사탕"
                    onLoad={handleImageLoaded}
                  />
                  {cookie.candySkill}
                </li>
                <li>
                  <img
                    src={icon_lock}
                    alt="잠금해제"
                    title="잠금해제"
                    onLoad={handleImageLoaded}
                  />
                  {cookie.unlockCondition}
                </li>
              </ul>
            </div>
          </section>
        </LazyLoad>
      </li>
    </React.Fragment>
  );
};

export default CookieItem;
