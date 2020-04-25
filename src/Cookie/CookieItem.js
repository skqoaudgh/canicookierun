import React, { useState } from 'react';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import ModalCookie from '../Modal/ModalCookie';

import './Item.css';

import icon_hp from '../assets/icon/heart.svg';
import icon_skill from '../assets/icon/magic.svg';
import icon_candy from '../assets/icon/candy.svg';
import icon_lock from '../assets/icon/lock.svg';

const CookieItem = ({ cookie, pet, scrollPosition }) => {
  const [modalPosition, setModalPosition] = useState([0, 0]);

  function handleImageLoaded(event) {
    event.target.classList.add('loaded');
  }

  function handleMouseEnter(event) {
    setModalPosition([
      event.target.offsetLeft,
      event.target.getBoundingClientRect().top + event.target.offsetHeight + 10,
    ]);
  }

  function handleMouseLeave(event) {
    if (modalPosition[0] > 0) {
      setModalPosition([0, 0]);
    }
  }

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
        <section className="item">
          <figure className="imageWrapper-cookie">
            <LazyLoadImage
              src={require(`../assets/cookie/${cookie.imageURL}`)}
              alt={cookie.name}
              title={cookie.name}
              effect="opacity"
              onLoad={handleImageLoaded}
              scrollPosition={scrollPosition}
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
                <LazyLoadImage
                  src={icon_hp}
                  alt="체력"
                  title="체력"
                  effect="opacity"
                  onLoad={handleImageLoaded}
                  scrollPosition={scrollPosition}
                />
                {cookie.health}
              </li>
              <li>
                <LazyLoadImage
                  src={icon_skill}
                  alt="쿠키능력"
                  title="쿠키능력"
                  effect="opacity"
                  onLoad={handleImageLoaded}
                  scrollPosition={scrollPosition}
                />
                {cookie.skill}
              </li>
              <li>
                <LazyLoadImage
                  src={icon_candy}
                  alt="마법사탕"
                  title="마법사탕"
                  effect="opacity"
                  onLoad={handleImageLoaded}
                  scrollPosition={scrollPosition}
                />
                {cookie.candySkill}
              </li>
              <li>
                <LazyLoadImage
                  src={icon_lock}
                  alt="잠금해제"
                  title="잠금해제"
                  effect="opacity"
                  onLoad={handleImageLoaded}
                  scrollPosition={scrollPosition}
                />
                {cookie.unlockCondition}
              </li>
            </ul>
          </div>
        </section>
      </li>
    </React.Fragment>
  );
};

export default trackWindowScroll(CookieItem);
