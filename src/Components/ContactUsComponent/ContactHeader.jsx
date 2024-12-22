import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={styles['contact-container']}>
        <img src="/contact.jpg" alt="" />
        <div className={styles.overlay}>
            <div className={styles.frame1}></div>
            <h1>REACH OUT TO CODEKRAFT </h1>
            <p>Your Digital Journey Starts Here - Get in Touch</p>
        </div>
    </div>
  )
}

export default ContactHeader
