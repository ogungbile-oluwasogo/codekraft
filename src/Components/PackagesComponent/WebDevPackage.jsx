import styles from './WebDevPackage.module.css';

const WebDevPackage = () => {
  return (
    <div className={styles.webConatainer}>
      <h2>WEB DEVELOPMENT</h2>
      <div className={styles.packagesWrapper}>
        <div className={styles.basic}>
            <h3>BASIC</h3>
            <h4>#150,000 +, (Annually)</h4>
            <p>3-5, Pages websites; <span>Blog, Corporate,</span></p>
            <hr />
            <p>SEO</p>
            <hr />
            <p>Technical Support</p>
            <hr />
            <p>3, Review</p>
            <hr />
            <button>Order Now</button>
        </div>
        <div className={styles.medium}>
            <h3>MEDIUM</h3>
            <h4>#200,000 +, (Annually)</h4>
            <p>5-7, Pages websites; <span>Blog, Corporate,</span></p>
            <hr />
            <p>SEO</p>
            <hr />
            <p>Technical Support</p>
            <hr />
            <p>5, Review</p>
            <hr />
            <button>Order Now</button>
        </div>
        <div className={styles.pro}>
            <h3>PRO</h3>
            <h4>#500,000 +, (Annually)</h4>
            <p>10+, Pages websites; <span>portal, Gov, logistics, etc</span></p>
            <hr />
            <p>SEO</p>
            <hr />
            <p>Full Technical Support</p>
            <hr />
            <p>Unlimited Review</p>
            <hr />
            <button>Order Now</button>
        </div>

      </div>
    </div>
  )
}

export default WebDevPackage
