import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = ( {isMenuOpen} ) => {
  return (
    <div className={style['']}>
      <nav className={`${style['nav-menu']} ${isMenuOpen ? style['show'] : ''}`}>
        <ul className={style['des-nav-list']}>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? style.active : '' }>
                    HOME
                </NavLink>
                        
            </li>
            <li>
                <NavLink to='/about-us' className={({isActive}) => isActive ? style.active : '' }>
                    ABOUT US
                </NavLink>
            </li>
            <li>
                <NavLink to='/about-us' className={({isActive}) => isActive ? style.active : '' }>
                    SERVICES
                </NavLink>
            </li>
            <li>PACKAGES</li>
            <li>CONTACT US</li>
        </ul>
        <div className={style['get-intouch']}><a href="">GET IN TOUCH</a></div>
        
      </nav>
    </div>
  )
}

export default NavBar
