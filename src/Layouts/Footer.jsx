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
            <Link to='/'><Arrow /> HOME</Link>
            <Link to='/'><Arrow />  ABOUT US</Link>
            <Link to='/'><Arrow />  PACKAGES</Link>
            <Link to='/'><Arrow />  SERVICES</Link>
            <Link to='/'><Arrow />  CONTACT US</Link>
          </div>
          <div>
            <h2>NAVIGATION</h2>
            <Link to='/'><Arrow /> Graphic Design</Link>
            <Link to='/'><Arrow />  Web Development</Link>
            <Link to='/'><Arrow />  Ui/ux Design</Link>
            <Link to='/'><Arrow />  Digital Marketing</Link>
          </div>
          <div>
            <h2>SITE POLICY</h2>
            <Link to='/'><Arrow />   Privacy & Policy</Link>
            <Link to='/'><Arrow />  Terms of services</Link>
            <Link to='/'><Arrow />  Disclaimer</Link>
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
