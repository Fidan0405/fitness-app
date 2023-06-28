import styles from "./Navbar.module.scss";
import FitnessLogo from "../../assets/fitness-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navItems}>
        <div className={styles.logo}>
          <img src={FitnessLogo} style={{ width: "500px" }} />
        </div>
        <div className={styles.navItemsLinks}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>HOME</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)}>ABOUT US</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)}>SERVICES</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)}>CONTACT US</NavLink>
          <NavLink className={styles.btn}>LOGIN</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;