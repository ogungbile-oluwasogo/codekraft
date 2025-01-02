import styles from './DigitalMarketing.module.css';

const DigitalMarketing = () => {
  return (
    <div className={styles.digitalConatainer} data-aos="fade-up">
      <h2>DIGITAL MARKETING</h2>
      <div className={styles.packagesWrapper}>
        <div className={styles.basic} data-aos="flip-up">
            <h3>BASIC</h3>
            <h4>#50,000 +, (Annually)</h4>
            <p>10 Post Monthly </p>
            <hr />
            <p>Free Revision</p>
            <hr />
            <p>Standard Copywriting</p>
            <hr />
            <p>Social Media Ads</p>
            <hr />
            <button>Order Now</button>
        </div>
        <div className={styles.medium} data-aos="fade-up">
            <h3>MEDIUM</h3>
            <h4>#150,000 +, (Annually)</h4>
            <p>20 Post Monthly</p>
            <hr />
            <p>Free Revision</p>
            <hr />
            <p>Standard Copywriting</p>
            <hr />
            <p>Facebook & Instagram Ads</p>
            <hr />
            <button>Order Now</button>
        </div>
        <div className={styles.pro} data-aos="flip-up">
            <h3>PRO</h3>
            <h4>#200,000 +, (Annually)</h4>
            <p>30 Post Monthly</p>
            <hr />
            <p>Free Revision</p>
            <hr />
            <p>Standard Copywriting</p>
            <hr />
            <p>Social Media Ads</p>
            <hr />
            <button>Order Now</button>
        </div>

      </div>
    </div>
  )
}

export default DigitalMarketing
