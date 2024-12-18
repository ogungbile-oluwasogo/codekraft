import styles from './GraphicPackage.module.css';

const GraphicPackage = () => {
  return (
    <div className={styles.graphicConatainer}>
      <h2>GRAPHIC DEVELOPMENT</h2>
      <div className={styles.packagesWrapper}>
        <div className={styles.basic}>
            <h3>BASIC</h3>
            <h4>#50,000 +, (Annually)</h4>
            <p>10, Flyer design</p>
            <hr />
            <p>5, Logos</p>
            <hr />
            <p>10, Social media design</p>
            <hr />
            <p>10, Review</p>
            <hr />
            <button>Order Now</button>
        </div>
        <div className={styles.medium}>
            <h3>MEDIUM</h3>
            <h4>#100,000 +, (Annually)</h4>
            <p>20, Flyer design</p>
            <hr />
            <p>10, Logos</p>
            <hr />
            <p>20, Social media design</p>
            <hr />
            <p>20, Review</p>
            <hr />
            <button>Order Now</button>
        </div>
        <div className={styles.pro}>
            <h3>PRO</h3>
            <h4>#150,000 +, (Annually)</h4>
            <p>30, Flyer design</p>
            <hr />
            <p>20, Logos</p>
            <hr />
            <p>30, Social media design</p>
            <hr />
            <p>30, Review</p>
            <hr />
            <button>Order Now</button>
        </div>

      </div>
    </div>
  )
}

export default GraphicPackage
