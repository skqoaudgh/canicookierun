import React, { useState, useEffect, useRef } from 'react';

import './Modal.css';

import icon_hp from '../../assets/icon/heart.svg';
import icon_skill from '../../assets/icon/magic.svg';
import icon_candy from '../../assets/icon/candy.svg';
import icon_lock from '../../assets/icon/lock.svg';
import icon_bonus from '../../assets/icon/bonus.svg';

const Modal = ({ isOpen, type, partner, left, top }) => {
  const style = {
    width: 20,
    height: 10,
    display: 'inline-block',
  };

  const container = useRef();
  const [position, setPosition] = useState({ left: 0, top: 0 });

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
              <img
                src={require(`../../assets/${type}/${partner.imageURL}`)}
                alt={partner.name}
              />
            </figure>
            <div className="infoWrapper">
              <div className="info-title">
                <div className="info-first">
                  <span className="itemName">{partner.name}</span>
                  <div className={`gradeContainer ${partner.grade}`}>
                    <strong>{partner.grade}</strong>
                  </div>
                </div>
              </div>
              {type === 'cookie' ? (
                <ul className="info-detail">
                  <li>
                    <img src={icon_hp} alt="체력" title="체력" />
                    {partner.health}
                  </li>
                  <li>
                    <img src={icon_skill} alt="쿠키능력" title="쿠키능력" />
                    {partner.skill}
                  </li>
                  <li>
                    <img src={icon_candy} alt="마법사탕" title="마법사탕" />
                    {partner.candySkill}
                  </li>
                  <li>
                    <img src={icon_lock} alt="잠금해제" title="잠금해제" />
                    {partner.unlockCondition}
                  </li>
                </ul>
              ) : (
                <div className="info-detail">
                  <ul className="detailList">
                    <li>
                      <ul className="petSkills">
                        {partner.skills.map((skill, index) => (
                          <li key={index} className="petSkill">
                            {index === 0 ? (
                              <img
                                src={icon_skill}
                                alt="펫능력"
                                title="펫능력"
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
                      <img
                        src={icon_bonus}
                        alt="조합보너스"
                        title="조합보너스"
                      />
                      {partner.bonus}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
