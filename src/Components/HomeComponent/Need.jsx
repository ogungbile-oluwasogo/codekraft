import { useEffect } from "react";
import GraphicSvg from "./GraphicSvg";
import styles from "./Need.module.css";
import UxSvg from "./UxSvg";
import WebSvg from "./WebSvg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Need = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [])

  return (
    <div  className={styles.need}>
      <h2 data-aos="fade-up">What Do You NEED?</h2>
        <p data-aos="slide-left">Kindly tell us what service you are looking for!!!</p>
        <div className={styles['border-bottom']}></div>
        <div className={styles['need-box-wrapper']}>
          <div className={styles['need-box1']} data-aos="flip-right">
            <GraphicSvg/>
            <h3>GRAPHIC DESIGN</h3>
            <p>Welcome to CodeKraft, your partner in 
               Graphic design/visual storytelling/branding. 
               We're excited to help you achieve your design goals,Bring your vision to life and elevate your amazing brand. 
            </p>
            <a href="">Get Started</a>
          </div>
          <div className={styles['need-box2']} data-aos="flip-down">
            <WebSvg />
            <h3>WEB DEVELOPMENT</h3>
            <p>
            Welcome to CodeKraft, your partner in web development, digital transformation and online success. 
            We're excited to help you achieve your online goals/build a stunning website/elevate your digital presence..
            </p>
            <a href="">Get Started</a>
          </div>
          <div className={styles['need-box3']} data-aos="zoom-out-right">
            <UxSvg/>
            <h3>UI/UX DESIGN</h3>
            <p>Welcome to CodeKraft, your partner in web development, digital transformation and online success. 
                We're excited to help you achieve your online goals/build a stunning website/elevate your digital presence..
            </p>
            <a href="">Get Started</a>
          </div>
        </div>
    </div>
  )
}

export default Need
