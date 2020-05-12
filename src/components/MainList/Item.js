import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

import Modal from '../Modal/Modal';

import './Item.css';

import icon_hp from '../../assets/icon/heart.svg';
import icon_skill from '../../assets/icon/magic.svg';
import icon_candy from '../../assets/icon/candy.svg';
import icon_lock from '../../assets/icon/lock.svg';
import icon_empty from '../../assets/icon/empty.png';

const Item = ({ type, item }) => {
  const [modalPosition, setModalPosition] = useState([0, 0]);

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

  const styleByType = (type) => {
    switch (type) {
      case 'cookie':
        return {
          width: '60%',
          height: '70%',
        };
      default:
        return {
          width: '50%',
          height: '50%',
        };
    }
  };

  return (
    <React.Fragment>
      {type !== 'treasure' ? (
        <Modal
          isOpen={modalPosition[0] > 0}
          type={type}
          partner={type === 'cookie' ? item.pet : item.cookie}
          left={modalPosition[0]}
          top={modalPosition[1]}
        />
      ) : null}
      <li className="listItem">
        <LazyLoad
          placeholder={
            <img src={require('../../assets/icon/empty.png')} alt="..." />
          }
          once={true}
        >
          <section className="item">
            <figure className="imageWrapper">
              <img
                src={require(`../../assets/${type}/${item.imageURL}`)}
                alt={item.name}
                title={item.name}
                style={styleByType(type)}
              />
            </figure>
            <div className="infoWrapper">
              <div className="info-title">
                <div className="info-first">
                  <span className="itemName">{item.name}</span>
                  <div className={`gradeContainer ${item.grade}`}>
                    <strong>{item.grade}</strong>
                  </div>
                </div>
                {item.partner && item.partner !== -1 ? (
                  <span
                    className="partner"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    짝꿍펫
                  </span>
                ) : null}
              </div>
              {type === 'cookie' ? (
                <ul className="info-detail">
                  <li>
                    <img src={icon_hp} alt="체력" title="체력" />
                    {item.health}
                  </li>
                  <li>
                    <img src={icon_skill} alt="쿠키능력" title="쿠키능력" />
                    {item.skill}
                  </li>
                  <li>
                    <img src={icon_candy} alt="마법사탕" title="마법사탕" />
                    {item.candySkill}
                  </li>
                  <li>
                    <img src={icon_lock} alt="잠금해제" title="잠금해제" />
                    {item.unlockCondition}
                  </li>
                </ul>
              ) : (
                <div className="info-detail">
                  <ul className="petSkills">
                    {item.skills.map((skill, index) => (
                      <li className="petSkill" key={index}>
                        {index === 0 ? (
                          <img
                            src={icon_skill}
                            alt={type === 'pet' ? '펫능력' : '보물효과'}
                            title={type === 'pet' ? '펫능력' : '보물효과'}
                          />
                        ) : (
                          <img
                            src={icon_empty}
                            alt={type === 'pet' ? '펫능력' : '보물효과'}
                            title={type === 'pet' ? '펫능력' : '보물효과'}
                          />
                        )}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </LazyLoad>
      </li>
    </React.Fragment>
  );
};

export default Item;
