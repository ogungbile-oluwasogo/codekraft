import styles from './AboutHeader.module.css';

const AboutHeader = () => {
  return (
    <div className={styles['image-container']}>
        <img src="/aboutus.jpg" alt="" />
        <div className={styles.overlay}>
            <div className={styles.frame1}></div>
            <h1>ABOUT CODEKRAFT LTD.</h1>
            <p>Crafting Digital Experiences with Code and Creativity</p>
            <h2>
            Elevate Your Digital Presence with us today!!!
            </h2>
        </div>
    </div>
  )
}

export default AboutHeader
