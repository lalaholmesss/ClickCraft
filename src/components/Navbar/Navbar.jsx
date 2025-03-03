import styles from "./Navbar.module.css";
import { Link } from "react-router";
import { useLocation } from "react-router";

export default function Navbar() {
    const location = useLocation();

        return(
        <div className={styles.container}>
            <div className={styles.logo}><img src="images/Logo.png" alt="" /></div>
            <div className={styles.navigation}>
                <ul>
                    <li><Link to="/" className={location.pathname === "/" ? styles.activeNavItem : styles.navItem}>Home</Link></li>
                    <li><Link to="/portfolios" className={location.pathname === "/portfolios" ? styles.activeNavItem : styles.navItem}>Portfolios</Link></li>
                    <li><Link to="/community" className={location.pathname === "/community" ? styles.activeNavItem : styles.navItem}>Community</Link></li>
                    <li><Link to="/about" className={location.pathname === "/about" ? styles.activeNavItem : styles.navItem}>About Us</Link></li>
                </ul>
            </div>
            <div className={styles.btns}>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}
