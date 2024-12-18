import styles from './UxPackage.module.css';

const UxPackage = () => {
  return (
    <div className={styles.uxConatainer}>
    <h2>UI/UX DESIGN</h2>
    <div className={styles.packagesWrapper}>
      <div className={styles.basic}>
          <h3>BASIC</h3>
          <h4>#100,000 +, (Annually)</h4>
          <p>3-5, Pages websites; <span>Blog, Corporate,</span></p>
          <hr />
          <p>1 Mobile App</p>
          <hr />
          <p>Protoyping</p>
          <hr />
          <p>3, Review</p>
          <hr />
          <button>Order Now</button>
      </div>
      <div className={styles.medium}>
          <h3>MEDIUM</h3>
          <h4>#150,000 +, (Annually)</h4>
          <p>5-7, Pages websites; <span>Blog, Corporate,</span></p>
          <hr />
          <p>2 Mobile</p>
          <hr />
          <p>Prototyping</p>
          <hr />
          <p>5, Review</p>
          <hr />
          <button>Order Now</button>
      </div>
      <div className={styles.pro}>
          <h3>PRO</h3>
          <h4>#300,000 +, (Annually)</h4>
          <p>10+, Pages websites; <span>portal, Gov, logistics, etc</span></p>
          <hr />
          <p>4 Mobile</p>
          <hr />
          <p>Prototyping</p>
          <hr />
          <p>Unlimited Review</p>
          <hr />
          <button>Order Now</button>
      </div>

    </div>
  </div>
  )
}

export default UxPackage
