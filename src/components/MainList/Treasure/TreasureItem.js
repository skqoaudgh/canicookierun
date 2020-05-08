import React from 'react';
import LazyLoad from 'react-lazyload';

import '../Cookie/Item.css';

import icon_skill from '../../../assets/icon/magic.svg';
import icon_empty from '../../../assets/icon/empty.png';

const treasureItem = ({ treasure, scrollPosition }) => {
  const handleImageLoaded = (event) => {
    event.target.classList.add('loaded');
  };

  return (
    <li className="listItem">
      <LazyLoad
        placeholder={
          <img src={require('../../../assets/icon/empty.png')} alt="..." />
        }
        once={true}
      >
        <section className="item">
          <figure className="imageWrapper">
            <img
              src={require(`../../../assets/treasure/${treasure.imageURL}`)}
              alt={treasure.name}
              title={treasure.name}
              onLoad={handleImageLoaded}
            />
          </figure>
          <div className="infoWrapper">
            <div className="info-title">
              <div className="info-first">
                <span className="itemName">{treasure.name}</span>
                <div className={`gradeContainer ${treasure.grade}`}>
                  <strong>{treasure.grade}</strong>
                </div>
              </div>
            </div>
            <div className="info-detail">
              <ul className="petSkills">
                {treasure.skills.map((skill, index) => (
                  <li className="petSkill" key={index}>
                    {index === 0 ? (
                      <img
                        src={icon_skill}
                        alt="보물효과"
                        title="보물효과"
                        onLoad={handleImageLoaded}
                      />
                    ) : (
                      <img
                        src={icon_empty}
                        alt="보물효과"
                        title="보물효과"
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

export default treasureItem;
