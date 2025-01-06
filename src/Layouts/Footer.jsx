import { Link } from 'react-router-dom';
import Logo from '../Components/LayoutComponent/Logo';
import styles from './Footer.module.css';
import Arrow from '../Components/LayoutComponent/Arrow';
import SocialMedia from '../Components/LayoutComponent/SocialMedia';
const Footer = () => {
  return (
    <div>
      <div className={styles.footerWrapper}>
        <div className={styles.footerGrid}>
          <div className={styles.social}>
          <Logo />
          <SocialMedia />
          </div>
          <div>
            <h2>MENUS</h2>
            <Link to='/'><Arrow /><p>HOME</p> </Link>
            <Link to='/'><Arrow />  <p>ABOUT US</p></Link>
            <Link to='/'><Arrow />  <p>PACKAGES</p></Link>
            <Link to='/'><Arrow />  <p>SERVICES</p></Link>
            <Link to='/'><Arrow />  <p>CONTACT US</p></Link>
          </div>
          <div>
            <h2>NAVIGATION</h2>
            <Link to='/'><Arrow /> <p>Graphic Design</p></Link>
            <Link to='/'><Arrow />  <p>Web Development</p></Link>
            <Link to='/'><Arrow />  <p>Ui/ux Design</p></Link>
            <Link to='/'><Arrow />  <p>Digital Marketing</p></Link>
          </div>
          <div>
            <h2>SITE POLICY</h2>
            <Link to='/'><Arrow />   <p>Privacy & Policy</p></Link>
            <Link to='/'><Arrow />  <p>Terms of services</p></Link>
            <Link to='/'><Arrow />  <p>Disclaimer</p></Link>
          </div>
        </div>
      </div>
      <div className={styles.reservedFooter}>
        <p>All rights reserved @CodeKraft 2024</p>
      </div>
    </div>
  )
}

export default Footer
