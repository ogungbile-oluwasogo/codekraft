import styles from './Client.module.css';

const Client = () => {
  return (
    <div className={styles.client}>
      <div className={styles.clientOne}>
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
        <div className={styles.clientLogo}>
          <img src="/meg.png" alt="Meg logo" />
          <img src="/charcoal.png" alt="Charcoal" />
          <img src="/neerahlogo.png" alt="Neerah Cakes" />
        </div>
      </div>
      <div className={styles.clientTwo}>
        <img src="/happy_client.jpg" alt="our happy client image" />
      </div>
    </div>
  )
}

export default Client
