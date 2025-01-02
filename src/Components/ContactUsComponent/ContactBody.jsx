import styles from './ContactBody.module.css';
import AddressSvg from './Svgs/AddressSvg';
import EmailSvg from './Svgs/EmailSvg';
import PhoneSvg from './Svgs/PhoneSvg';
const ContactBody = () => {
  return (
    <div>
      <div className={styles.flexContact}>
        <div className={styles.contact1} data-aos="fade-up">
            <div className={styles.sideBorder}></div>
            <h2>Let’s Get In Touch</h2>
            <h3>Stay Tuned & Keep Connected With Us...........</h3>
            <p className={styles.hidePara} data-aos="fade-up">CodeCraft offers expert UI/UX design, web development, and graphic design services. 
                We deliver high-quality, user-centric solutions with a holistic approach. 
                Our personalized service ensures timely project delivery and ongoing support. 
                With expertise in latest technologies, we drive results and client satisfaction. 
                Trust CodeCraft for innovative digital solutions that elevate your brand.
            </p>
            <div className={styles.bottomBorder}></div>
            <div className={styles.contactFlex} data-aos="fade-up">
                <div>
                    <AddressSvg />
                    <p>Osogbo, Osun State, Nigeria</p>
                </div>
                <div className={styles.flexAbsolute}>
                    <EmailSvg />
                    <p>codekraft@admin.com</p>
                </div>
                <div>
                    <PhoneSvg />
                    <p>(+234) 8162479161 or (+234) 7025315463</p>
                </div>
            </div>
        </div>
        <div className={styles.contact2} data-aos="fade-up">
            <form action="" data-aos="zoom-in">
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
