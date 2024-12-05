import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";
import Logo from "../Components/LayoutComponent/Logo";
import Menu from "../Components/LayoutComponent/Menu";
import { useState } from "react";
import NavBar from "../Components/LayoutComponent/NavBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showNavHandler = () => {
    setIsMenuOpen((onshow) => !onshow);
  };

  return (
  <>
    <div className={style.container}>
      <div className={style['flex-container']}>
        <div>
          <Link to='/'>
            <Logo />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className={style['fixed']}>
            <ul className={style['des-nav-list']}>
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? style.active : '' }>
                    HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/aboutus' className={({isActive}) => isActive ? style.active : '' }>
                    ABOUT US
                    </NavLink>
                </li>
                <li>SERVICES</li>
                <li>
                    <NavLink to='/packages' className={({isActive}) => isActive ? style.active : '' }>
                    PACKAGES
                    </NavLink>
                </li>
                <li>CONTACT US</li>
            </ul>
        </div>
        <div className={style['get-intouch']}><a href="">GET IN TOUCH</a></div>
        <div className={style['mobile-menu']}><Menu isMenuOpen = {isMenuOpen} setIsMenuOpen = {setIsMenuOpen} /></div>
      </div>
    </div>
    <NavBar isMenuOpen = {isMenuOpen} showNavHandler = {showNavHandler}/>
  </>
  )
}

export default Header
