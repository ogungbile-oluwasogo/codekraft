import styles from './OurTeam.module.css';

const OurTeam = () => {
  return (
    <div className={styles.ourTeam} data-aos="fade-up">
      <h2>Our Team</h2>
      <div className={styles.sideBorder}></div>
      <h3>Get to know our professional team in person..........</h3>
      <div className={styles.flexTeam}>
        <div className={styles.innerflexTeam}>
            <img src="/uidesigner.jpg" alt="AFOLABI MUKHTAR OPEYEMI" data-aos="flip-left"/>
            <div data-aos="slide-up">
                <h4>AFOLABI MUKHTAR OPEYEMI</h4>
                <p>UI/UX Designer, GRAPHIC  Designer, WEB Designer, DIGITAL Marketer</p>
            </div>
        </div>
        <div className={styles.innerflexTeam}>
            <img src="/sagzy.jpg" alt="OLUWASOGO OLABAMIJI OGUNGBILE" data-aos="flip-right"/>
            <div data-aos="fade-up">
                <h4>OLUWASOGO OLABAMIJI OGUNGBILE</h4>
                <p>FRONT-END Developer, BACK-END Developer, System Programmer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
