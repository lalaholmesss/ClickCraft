import styles from "./Navbar.module.css";
import { Link } from "react-router";

export default function Navbar() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}><img src="images/Logo.png" alt="" /></div>
            <div className={styles.navigation}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/Portfolios"><li>Portfolios</li></Link>
                    <Link to="/Community"><li>Community</li></Link>
                    <Link to="/About"><li>About Us</li></Link>
                </ul>
            </div>
            <div className={styles.btns}>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}
