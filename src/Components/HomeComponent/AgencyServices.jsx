import { useEffect } from 'react';
import styles from './AgencyServices.module.css';
import AwardSvg from './AwardSvg';
import SettingsSvg from './SettingsSvg';
import SupportSvg from './SupportSvg';
import TalentSvg from './TalentSvg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AgencyServices = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, [])

  return (
    <div className={styles.container}>
    <section>
    <div className={styles.flexContainer}>
      <div className={styles.leftBorder}></div>
      <div className={styles.flexWrapper}>
        <h2 data-aos="fade-up">Why CODEKRAFT</h2>
        <h3 data-aos="slide-left">Why choosing our Digital Agency Services..........</h3>
        <p data-aos="slide-right">CodeCraft offers expert UI/UX design, web development, and graphic design services. 
            We deliver high-quality, user-centric solutions with a holistic approach. 
            Our personalized service ensures timely project delivery and ongoing support. 
            With expertise in latest technologies, we drive results and client satisfaction. 
            Trust CodeCraft for innovative digital solutions that elevate your brand.
        </p>
        <button data-aos="slide-left">Get Started</button>
      </div>
      <div className={styles.middleBorder} data-aos="slide-up">
      </div>
      <div className={styles.flexWrapperGrid} data-aos="slide-right">
        <div>
            <AwardSvg />
            <p>Acquired many Best Awards Working</p>
        </div>
        <div>
            <TalentSvg />

            <p>Best Talent Experience</p>
        </div>
        <div>
            <SettingsSvg />
            <p>Best of Team Managements</p>
        </div>
        <div>
            <SupportSvg />
            <p>24/7 Technical System Support</p>
        </div>
      </div>
    </div>
    </section>
    <section>
        <div className={styles.flexContainer}>
        <div className={styles.leftBorder} data-aos="slide-right"></div>
            <div className={styles.flexWrapper}>
                <h2 data-aos="slide-right">24/7 Free Consultation</h2>
                <h3 data-aos="fade-down">We Have a Professional Team Support Ready 24/7........ </h3>
                <p className={styles.para} data-aos="fade-up">Get instant assistance from CodeKraft's expert professionals, available 24 hours a day, 7 days a week.
                    Our dedicated team ensures seamless UI/UX, web development, and graphic design solutions, 
                    minimizing downtime and maximizing your digital potential."
                </p>
                <div className={styles.checkBoxContainer} data-aos="flip-right">
                    <label className={styles["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={styles["checkmark"]}></span>
                        Technical Support Ready
                    </label>
                    <label className={styles["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={styles["checkmark"]}></span>
                        Sales Support Ready
                    </label>
                    <label className={styles["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={styles["checkmark"]}></span>
                        Consultation Service Ready
                    </label>
                </div>
                <div className={styles.buttonFlex} data-aos="fade-down">
                    <button className={styles.flexButton}>Get Started</button>
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <img src="/agentimg.jpg" alt="" data-aos="zoom-in" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default AgencyServices
