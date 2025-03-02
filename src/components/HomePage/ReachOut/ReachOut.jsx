import styles from "./ReachOut.module.css";

export default function ReachOut() {
    return(
        <div className={styles.mainCont}>
            <div className={styles.container}>
            <div className={styles.textContent}>
                <h2>Always Reachable</h2>
                <p>Feel free to reach out to us anytime through email or LinkedIn. We're here to assist you and answer any queries you may have. Let's stay connected!</p>
                <div className={styles.founderInfo}>
                    <div>
                    <img src="images/Founder.png" alt="" />
                    </div>
                    <div><h3>Yagna Kusumanchi</h3>
                    <p>Founder and CEO of Click Craft</p>
                    <div className={styles.socialIcons}>
                        <img src="images/GithubIcon.png" alt="" />
                        <img src="images/DiscordIcon.png" alt="" />
                        <img src="images/RedditIcon.png" alt="" />
                        <img src="images/TwitterIcon.png" alt="" />
                    </div>
                    </div>
                </div>

            </div>
            <div>
            <img src="images/ReachOutLogo.png" alt="" />
            </div>
            </div>
        </div>
    )
}