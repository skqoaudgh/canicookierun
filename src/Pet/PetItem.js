import React, { useState } from 'react';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import ModalPet from '../Modal/ModalPet';

import '../Cookie/Item.css';

import icon_skill from '../assets/icon/magic.svg';

const PetItem = ({ cookie, pet, scrollPosition }) => {
  const style = {
    width: 18.5,
    height: 10,
    display: 'inline-block',
  };

  const [modalPosition, setModalPosition] = useState([0, 0]);

  function handleImageLoaded(event) {
    event.target.classList.add('loaded');
  }

  function handleMouseEnter(event) {
    setModalPosition([event.target.offsetLeft, event.clientY]);
  }

  function handleMouseLeave(event) {
    setModalPosition([0, 0]);
  }

  return (
    <li className="listItem">
      {modalPosition[0] > 0 ? (
        <ModalPet
          cookie={cookie}
          bonus={cookie.bonus}
          left={modalPosition[0]}
          top={modalPosition[1]}
        />
      ) : null}
      <section className="item">
        <figure className="imageWrapper">
          <LazyLoadImage
            src={require(`../assets/pet/${pet.imageURL}`)}
            alt={pet.name}
            title={pet.name}
            effect="opacity"
            onLoad={handleImageLoaded}
            scrollPosition={scrollPosition}
          />
        </figure>
        <div className="infoWrapper">
          <div className="info-title">
            <div className="info-first">
              <span className="itemName">{pet.name}</span>
              <strong>{pet.grade}</strong>
            </div>
            {pet.partner !== -1 ? (
              <span
                className="partner"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                짝꿍쿠키
              </span>
            ) : null}
          </div>
          <div className="info-detail">
            <ul className="petSkills">
              {pet.skills.map((skill, index) => (
                <li className="petSkill" key={index}>
                  {index === 0 ? (
                    <LazyLoadImage
                      src={icon_skill}
                      alt="펫능력"
                      title="펫능력"
                      effect="opacity"
                      onLoad={handleImageLoaded}
                      scrollPosition={scrollPosition}
                    />
                  ) : (
                    <div style={style}></div>
                  )}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </li>
  );
};

export default trackWindowScroll(PetItem);
