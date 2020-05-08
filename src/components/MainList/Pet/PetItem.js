import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

import ModalPet from '../../Modal/ModalPet';

import '../Cookie/Item.css';

import icon_skill from '../../../assets/icon/magic.svg';
import icon_empty from '../../../assets/icon/empty.png';
const PetItem = ({ cookie, pet, scrollPosition }) => {
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
    setModalPosition([0, 0]);
  };

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
      <LazyLoad
        placeholder={
          <img src={require('../../../assets/icon/empty.png')} alt="..." />
        }
        once={true}
      >
        <section className="item">
          <figure className="imageWrapper">
            <img
              src={require(`../../../assets/pet/${pet.imageURL}`)}
              alt={pet.name}
              title={pet.name}
              onLoad={handleImageLoaded}
            />
          </figure>
          <div className="infoWrapper">
            <div className="info-title">
              <div className="info-first">
                <span className="itemName">{pet.name}</span>
                <div className={`gradeContainer ${pet.grade}`}>
                  <strong>{pet.grade}</strong>
                </div>
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
                      <img
                        src={icon_skill}
                        alt="펫능력"
                        title="펫능력"
                        onLoad={handleImageLoaded}
                      />
                    ) : (
                      <img
                        src={icon_empty}
                        alt="펫능력"
                        title="펫능력"
                        onLoad={handleImageLoaded}
                      />
                    )}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </LazyLoad>
    </li>
  );
};

export default PetItem;
