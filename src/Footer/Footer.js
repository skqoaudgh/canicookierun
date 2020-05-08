import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <a
        href="https://mit-license.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Copyright 2020. Myungho Bae (myungho.dev@gmail.com)
      </a>
      <span>|</span>
      <a
        href="https://cafe.naver.com/cookierun"
        target="_blank"
        rel="noopener noreferrer"
      >
        쿠키런 대표 커뮤니티
      </a>
    </div>
  );
};

export default Footer;
