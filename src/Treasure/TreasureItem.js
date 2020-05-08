import React from 'react';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import '../Cookie/Item.css';

import icon_skill from '../assets/icon/magic.svg';
import icon_empty from '../assets/icon/empty.png';

const treasureItem = ({ treasure, scrollPosition }) => {
  const handleImageLoaded = (event) => {
    event.target.classList.add('loaded');
  };

  return (
    <li className="listItem">
      <section className="item">
        <figure className="imageWrapper">
          <LazyLoadImage
            src={require(`../assets/treasure/${treasure.imageURL}`)}
            alt={treasure.name}
            title={treasure.name}
            effect="opacity"
            onLoad={handleImageLoaded}
            scrollPosition={scrollPosition}
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
                    <LazyLoadImage
                      src={icon_skill}
                      alt="보물효과"
                      title="보물효과"
                      effect="opacity"
                      onLoad={handleImageLoaded}
                      scrollPosition={scrollPosition}
                    />
                  ) : (
                    <LazyLoadImage
                      src={icon_empty}
                      alt="보물효과"
                      title="보물효과"
                      effect="opacity"
                      onLoad={handleImageLoaded}
                      scrollPosition={scrollPosition}
                    />
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

export default trackWindowScroll(treasureItem);
