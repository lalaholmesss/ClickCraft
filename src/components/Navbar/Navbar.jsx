import styles from "./Navbar.module.css";
export default function Navbar() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}><img src="images/Logo.png" alt="" /></div>
            <div className={styles.navigation}>
                <a href="/Home">Home</a>
                <a href="/Portfolios">Portfolios</a>
                <a href="/Community">Community</a>
                <a href="/About us">About Us</a>
            </div>
            <div className={styles.btns}>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}
