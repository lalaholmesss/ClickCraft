import styles from "./AboutUs.module.css";

export default function AboutUs() {
    return(
        <div className={styles.container}>
            <div className={styles.profCard}>
                <div className={styles.userImg}>
                    <img src="images/Founder.png" alt="" />
                    <p>Yagma Kusumanchi</p>
                    <button>Edit Profile</button>
                </div>
                <div className={styles.engagement}>
                    <div>
                        <span className={styles.boldTxt}>1300</span>
                        <p>Views</p>
                    </div>
                    <div>
                        <span className={styles.boldTxt}>899</span>
                        <p>Followers</p>
                    </div>
                    <div>
                        <span className={styles.boldTxt}>560</span>
                        <p>Likes</p>
                    </div>
                </div>

                <div className={styles.aboutContainer}>
                    <p className={styles.headerTxt}>About</p>
                    <p className={styles.txt}>I'm Yagna Kusumanchi, an aspiring Full Stack Developer with a passion for bringing ideas to life. Proficient in C, C++, Python, JavaScript, and experienced in Node, Express, MongoDB, and React, I'm dedicated to crafting innovative and impactful digital solutions. Let's connect and create something amazing! 👨‍💻</p>
                </div>

                <div className={styles.portfolio}>
                    <p className={styles.headerTxt}>My Portfolios</p>
                    <div className={styles.portfolioContainer}>
                        <div className={styles.portfolioCard}>
                            <img src="images/Portfolio-card.png" alt="" />
                            <div className={styles.icons}>
                                <button>Copy Link</button>
                                <div className={styles.favIcons}>
                                    <img src="images/Favorite.png" alt="" />
                                    <p>99</p>
                                    <img src="images/Eye.png" alt="" />
                                    <p>999</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.portfolioCard}>
                            <img src="images/Portfolio-card.png" alt="" />
                            <div className={styles.icons}>
                                <button>Copy Link</button>
                                <div className={styles.favIcons}>
                                    <img src="images/Favorite.png" alt="" />
                                    <p>99</p>
                                    <img src="images/Eye.png" alt="" />
                                    <p>999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}