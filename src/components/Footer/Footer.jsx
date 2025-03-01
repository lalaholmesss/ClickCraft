import styles from "./Footer.module.css";

export default function Footer() {
    return(
        <div className={styles.container}>
            <span> &copy; 2024 Click Craft. All rights reserved.</span>
            <div className={styles.listCont}>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
            </div>
        </div>
    )
}