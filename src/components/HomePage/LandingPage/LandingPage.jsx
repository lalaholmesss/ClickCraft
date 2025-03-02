import styles from "./LandingPage.module.css";

export default function LandingPage() {
    return(
        <div className={styles.container}>
            <div className={styles.welcome}>
                <div>
                    <img src="images/Stars.png" alt="" />
                </div>
                <p>Welcome to Click Craft</p>
            </div>
            <div className={styles.header}>
                <h1>Your Story, Your Way<br />
                    Build Your Personal Portfolio
                </h1>
            </div>
            <p className={styles.text}>Showcase your journey by crafting a personal portfolio in minutes</p>
            <div className={styles.btns}>
                <button>Get Started For Free</button>
                <button>
                    <div className={styles.playBtn}>
                        <img src="images/Play.png" alt="" />
                        Watch Video
                    </div>
                </button>
            </div>
            <div className={styles.bgImage}><img src="images/Background-img.png" alt="" /></div>
        </div>
    )
}