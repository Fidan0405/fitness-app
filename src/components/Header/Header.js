import styles from "./Header.module.scss";
import FitnessLogo from "../../assets/fitness-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navItems}>
        <div className={styles.logo}>
          <img src={FitnessLogo} style={{width:"500px"}}/>
        </div>
        <div className={styles.navItemsLinks}>
          <Link className={styles.navLinks}>HOME</Link>
          <Link className={styles.navLinks}>ABOUT US</Link>
          <Link className={styles.navLinks}>SERVICES</Link>
          <Link className={styles.navLinks}>CONTACT US</Link>
          <Link className={`${styles.navLinks} ${styles.btn}`}>LOGIN</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
