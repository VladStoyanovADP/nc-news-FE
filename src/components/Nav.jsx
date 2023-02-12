import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.burger}>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
      </div>
      <div className={styles.left}>
        {/* <Link className={styles.nav_link} to="/">
          <img src={logo} alt="NC News" />
        </Link> */}
        <Link className={styles.nav_link} to="/">
          Topics
        </Link>
        <Link className={styles.nav_link} to="/articles">
          Articles
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
