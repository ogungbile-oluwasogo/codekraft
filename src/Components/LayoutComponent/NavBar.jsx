import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = ( {isMenuOpen, showNavHandler} ) => {
  return (
    <div className={style['']}>
      <nav className={`${style['nav-menu']} ${isMenuOpen ? style['show'] : ''}`}>
        <ul className={style['des-nav-list']}>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? style.active : '' } onClick={showNavHandler}>
                    HOME
                </NavLink> 
            </li>
            <li>
                <NavLink to='/aboutus' className={({isActive}) => isActive ? style.active : '' } onClick={showNavHandler}>
                    ABOUT US
                </NavLink>
            </li>
            <li>
                <NavLink to='/services' className={({isActive}) => isActive ? style.active : '' }>
                    SERVICES
                </NavLink>
            </li>
            <li>
                <NavLink to='/packages' className={({isActive}) => isActive ? style.active : '' } onClick={showNavHandler}>
                PACKAGES
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={({isActive}) => isActive ? style.active : '' } onClick={showNavHandler}>
                CONTACT US
                </NavLink>
            </li>
        </ul>
        <div className={style['get-intouch']}><NavLink to="/contact">GET IN TOUCH</NavLink></div>
        
      </nav>
    </div>
  )
}

export default NavBar
