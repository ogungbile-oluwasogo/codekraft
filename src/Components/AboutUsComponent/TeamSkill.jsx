import styles from './TeamSkill.module.css';

const TeamSkill = () => {
  return (
    <div className={styles.TeamSkill}>
      <div className={styles.item1}>
        <h2>Our Team Skill</h2>
        <div className={styles.sideBorder}></div>
        <h3>Let’s Know Our Professional Team Skills........... </h3>
        <p>Our CodeKraft team excels in:
          Programming languages: Html, Python, Java, JavaScript, C++, C#
          Development frameworks: React, Angular, Vue.js, Django, Flask
          Databases: MySQL, MongoDB, PostgreSQL, SQL Server
          Graphics design: Adobe PS, Illustrator, Coreldraw
          UI/UX design: Figma, Adobe XD, Sketch
        </p>
      </div>
      <div className={styles.item2}>
        <img src="/skill.jpg" alt="" />
      </div>
      <div className={styles.item3}>
          Content
      </div>
    </div>
  )
}

export default TeamSkill
