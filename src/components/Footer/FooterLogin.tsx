import React from 'react';
// import css
import footer from './footer.module.css';

const FooterLogin = ({}) => {
  return (
      <footer className={ footer.footerParent}>
      <div className={footer.footerFeatures}>
        <p>Meta</p>
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
        <p>Help </p>
        <p>API </p>
        <p>Privacy </p>
        <p>Terms</p>
        <p>Top</p>
        <p>Accounts</p>
        <p>Hashtags </p>
        <p>Locations </p>
        <p>Instagram </p>
        <p>Lite</p>
        <p> Contact</p>
        <p> Uploading & Non-Users</p>
      </div>
      <div >© 2022 Instagram from Meta</div>
    </footer>
  );
};

export default FooterLogin;
