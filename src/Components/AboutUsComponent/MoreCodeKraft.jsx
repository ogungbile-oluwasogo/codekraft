import style from './MoreCodeKraft.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';






const MoreCodeKraft = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500,
        });
      }, [])
    

  return (
    <div>
      <section className={style.flexContainer}>
        <div className={style.flexOne}>
            <h2 data-aos="fade-up">Let us know more about CODEKRAFT</h2>
            <div className={style.leftBorder}></div>
            <h3 data-aos="fade-down">We are skilled digital agency team & we delivers high-end services!!!</h3>
            <p className={style.newPara}>“At CodeKraft limited, we strive to deliver exceptional digital solutions that exceed our clients’ expectations. Our team of skilled designers and developers craft innovative, user-friendly experiences that drive business success.”
            </p>
                <div className={style.checkBoxContainer} data-aos="flip-left">
                    <label className={style["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={style["checkmark"]}></span>
                        Web Development
                    </label>
                    <label className={style["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={style["checkmark"]}></span>
                        Graphic Design
                    </label>
                    <label className={style["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={style["checkmark"]}></span>
                        UI/UX DESIGN
                    </label>
                    <label className={style["custom-checkbox"]}>
                        <input type="checkbox" checked />
                        <span className={style["checkmark"]}></span>
                        DIGITAL MARKETING
                    </label>
                </div>
        </div>
        <div className={style.flexTwo}>
            <img src="/aboutcode.png" alt="" data-aos="slide-right"/>
        </div>
      </section>
    </div>
  )
}

export default MoreCodeKraft
