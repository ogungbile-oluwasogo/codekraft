import style from './PackagesHeader.module.css';

const PackagesHeader = () => {
  return (
    <div className={style['image-container']}>
        <img src="/packagesheader.jpg" alt="" />
        <div className={style.overlay}>
            <div className={style.frame1}></div>
            <h1>CODEKRAFT PACKAGES</h1>
            <div className={style.sideBorder}></div>
            <p>CodeKraft offers a one-stop-shop for businesses looking to 
                transform their digital presence and drive results......
            </p>
        </div>
    </div>
  )
}

export default PackagesHeader
