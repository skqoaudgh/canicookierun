import React, { useState, useEffect, useRef } from 'react';

import './Modal.css';

import icon_hp from '../../assets/icon/heart.svg';
import icon_skill from '../../assets/icon/magic.svg';
import icon_candy from '../../assets/icon/candy.svg';
import icon_lock from '../../assets/icon/lock.svg';

const ModalPet = ({ cookie, left, top, scrollPosition }) => {
  const container = useRef();
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleImageLoaded = (event) => {
    event.target.classList.add('loaded');
  };

  useEffect(() => {
    setPosition({
      left: left - container.current.offsetWidth / 1.5,
      top: top,
      visibility: 'visible',
    });
  }, [left, top]);

  return (
    <div ref={container} className="modal" style={position}>
      <section className="modalItem">
        <figure className="imageWrapper-cookie">
          <img
            src={require(`../../assets/cookie/${cookie.imageURL}`)}
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
    </div>
  );
};

export default ModalPet;
