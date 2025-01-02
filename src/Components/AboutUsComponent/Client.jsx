import styles from './Client.module.css';

const Client = () => {
  return (
    <div className={styles.client}>
      <div className={styles.clientOne} data-aos="fade-up">
        <h2>CODEKRAFT Clients</h2>
        <div className={styles.sideBorder}></div>
        <h3>
          Over 30+ Large 
          Company Trust Our Services.......
        </h3>
        <p>
          "CodeKraft's passion for innovative solutions aligns with our vision. 
          Their professionalism and reliability solidify our trust."
        </p>
        <div className={styles.clientLogo} data-aos="zoom-in">
          <img src="/meg.png" alt="Meg logo" />
          <img src="/charcoal.png" alt="Charcoal" />
          <img src="/neerahlogo.png" alt="Neerah Cakes" />
        </div>
      </div>
      <div className={styles.clientTwo} data-aos="flip-up">
        <img src="/happy_client.jpg" alt="our happy client image" />
      </div>
    </div>
  )
}

export default Client
