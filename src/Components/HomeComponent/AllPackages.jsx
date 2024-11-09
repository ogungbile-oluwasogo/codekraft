import { useEffect } from 'react';
import styles from './AllPackages.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';



const AllPackages = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [])


  return (
    <div>
      <section className={styles.flexContainer}>
        <div className={styles.flexOne}>
            <h2 data-aos="fade-up">All in one package</h2>
            <div className={styles.leftBorder}></div>
            <h3 data-aos="fade-down">Subscribe to All our package
            & Enjoy Premium Services................ </h3>
                <div className={styles.checkBoxContainer} data-aos="flip-left">
                    <label className={styles["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={styles["checkmark"]}></span>
                        Web Development
                    </label>
                    <label className={styles["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={styles["checkmark"]}></span>
                        Graphic Design
                    </label>
                    <label className={styles["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={styles["checkmark"]}></span>
                        UI/UX DESIGN
                    </label>
                    <label className={styles["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={styles["checkmark"]}></span>
                        DIGITAL MARKETING
                    </label>
                </div>
                <div className={styles.levels}>
                    <p className={styles.basic} data-aos="fade-up">BASIC</p>
                    <p className={styles.medium} data-aos="fade-down">MEDIUM</p>
                    <p className={styles.pro} data-aos="slide-left">PRO</p>
                </div>
        </div>
        <div className={styles.flexTwo}>
            <img src="/allpackages.png" alt="" data-aos="slide-right"/>
            <div data-aos="fade-up"></div>
        </div>
      </section>
    </div>
  )
}

export default AllPackages
