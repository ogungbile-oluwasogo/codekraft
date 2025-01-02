import styles from './TeamSkill.module.css';

const TeamSkill = () => {
  return (
    <div className={styles.TeamSkill}>
      <div className={styles.item1}>
        <h2>Our Team Skill</h2>
        <div className={styles.sideBorder}></div>
        <h3 data-aos="fade-up">Let’s Know Our Professional Team Skills........... </h3>
        <p data-aos="zoom-in">Our CodeKraft team excels in:
          Programming languages: Html, Python, Java, JavaScript, C++, C#
          Development frameworks: React, Angular, Vue.js, Django, Flask
          Databases: MySQL, MongoDB, PostgreSQL, SQL Server
          Graphics design: Adobe PS, Illustrator, Coreldraw
          UI/UX design: Figma, Adobe XD, Sketch
        </p>
      </div>
      <div className={styles.item2} data-aos="flip-up">
        <img src="/skill.jpg" alt="" />
      </div>
      <div className={styles.item3} data-aos="fade-left">
          <h4>Web Development</h4>
          <div className={styles.outerChart}>
            <div className={styles.innerChart1}></div>
          </div>
          <h4>Graphic Design</h4>
          <div className={styles.outerChart}>
            <div className={styles.innerChart2}></div>
          </div>
          <h4>UI/UX Design</h4>
          <div className={styles.outerChart}>
            <div className={styles.innerChart3}></div>
          </div>
          <h4>Digital Marketing</h4>
          <div className={styles.outerChart}>
            <div className={styles.innerChart4}></div>
          </div>
      </div>
    </div>
  )
}

export default TeamSkill
