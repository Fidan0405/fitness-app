import Home from "../Home/Home";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Home />
      </div>
    </>
  )
}

export default Layout
