import { useEffect } from 'react';
import GraphicSvg from './GraphicSvg';
import styles from './Packages.module.css';
import UxSvg from './UxSvg';
import WebSvg from './WebSvg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';




const Packages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [])

  return (
    <div className={styles.container}>
      <h2 data-aos="fade-up">Packages</h2>
      <div className={styles.leftBorder}></div>
      <h3 data-aos="fade-right">CODEKRAFT Popular Package include...............</h3>
      <div className={styles.packages}>
        <div className={styles['packages-container']} data-aos="zoom-in">
            <img src="/graphic.jpg" alt="" data-aos="zoom-out"/>
            <div className={styles.divIcon}><GraphicSvg/></div>
            <p className={styles.graphic}>GRAPHIC DESIGN</p>
            <div className={styles.divList}>
                <p>- Branding (logos, identity)</p>
                <p>- Print Design (brochures, flyers, business cards)</p>
                <p>- Packaging Design (labels, boxes, containers)</p>
                <p>- Editorial Design (magazines, newspapers, books)</p>
                <div><Link to="packages"><button data-aos="zoom-in">See More</button></Link></div>
            </div>
        </div>
        <div className={styles['packages-container']} data-aos="zoom-in">
        <img src="/web_development.jpg" alt="" />
            <div className={styles.divIcon2}><WebSvg/></div>
            <p className={styles.web}>WEB DEVELOPMENT</p>
            <div className={styles.divList2}>
                <p>- Blogs (personal, niche, or corporate)</p>
                <p>- E-commerce Websites</p>
                <p>- Educational websites</p>
                <p>- Government websites</p>
                <p>- Entertainment Websites</p>
                <div><Link to="packages"><button data-aos="zoom-in">See More</button></Link></div>
            </div>
        </div>
        <div className={styles['packages-container']}data-aos="flip-right">
        <img src="/ui_ux.jpg" alt="" />
            <div className={styles.divIcon3}><UxSvg /></div>
            <p className={styles.uiux}>UI/UX DESIGN</p>
            <div className={styles.divList3}>
                <p>- Web Design</p>
                <p>- Mobile App Design</p>
                <p>- Desktop Application</p>
                <p>- Software Design</p>
                <p>- Game Design</p>
                <div><Link to="packages"><button data-aos="zoom-in">See More</button></Link></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
