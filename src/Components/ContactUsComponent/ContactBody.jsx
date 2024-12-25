import styles from './ContactBody.module.css';
const ContactBody = () => {
  return (
    <div>
      <div className={styles.flexContact}>
        <div className={styles.contact1}>
            <div className={styles.sideBorder}></div>
            <h2>Let’s Get In Touch</h2>
            <h3>Stay Tuned & Keep Connected With Us...........</h3>
        </div>
        <div className={styles.contact2}>
            <form action="">
                <div>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <div>
                    <input type="text" placeholder='Subject' />
                    <input type="email" placeholder='Email' />
                </div>
                <div>
                <textarea name="">Message</textarea>
                </div>
                <button type='button'>REACH OUT</button>
            </form>
        </div>
      </div>
      <div className={styles.contactImage}>
        <img src="/map_contact.png" alt="" />
      </div>
    </div>
  )
}

export default ContactBody
