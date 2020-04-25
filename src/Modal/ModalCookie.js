import React, { useState, useEffect, useRef } from 'react';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import './Modal.css';

import icon_skill from '../assets/icon/magic.svg';
import icon_bonus from '../assets/icon/bonus.svg';

const ModalCookie = ({ isOpen, pet, bonus, left, top, scrollPosition }) => {
  const style = {
    width: 20,
    height: 10,
    display: 'inline-block',
  };

  const container = useRef();
  const [position, setPosition] = useState({ left: 0, top: 0 });

  function handleImageLoaded(event) {
    event.target.classList.add('loaded');
  }

  useEffect(() => {
    if (container.current) {
      setPosition({
        left: left - container.current.offsetWidth / 1.5,
        top: top,
        visibility: 'visible',
      });
    }
  }, [left, top]);

  return (
    <React.Fragment>
      {isOpen ? (
        <div ref={container} className="modal" style={position}>
          <section className="modalItem">
            <figure className="imageWrapper">
              <LazyLoadImage
                src={require(`../assets/pet/${pet.imageURL}`)}
                alt={pet.name}
                effect="opacity"
                onLoad={handleImageLoaded}
                scrollPosition={scrollPosition}
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
              </div>
              <div className="info-detail">
                <ul className="detailList">
                  <li>
                    <ul className="petSkills">
                      {pet.skills.map((skill, index) => (
                        <li key={index} className="petSkill">
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
                  </li>
                  <li>
                    <LazyLoadImage
                      src={icon_bonus}
                      alt="조합보너스"
                      title="조합보너스"
                      effect="opacity"
                      onLoad={handleImageLoaded}
                      scrollPosition={scrollPosition}
                    />
                    {bonus}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default trackWindowScroll(ModalCookie);
