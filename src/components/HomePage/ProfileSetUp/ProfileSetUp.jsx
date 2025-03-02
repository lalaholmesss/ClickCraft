import styles from "./ProfileSetUp.module.css";
export default function ProfileSetUp() {    return(
        <div className={styles.container}>
            <div className={styles.texts}>
                <h1>5 minute set-up process</h1>
                <p>Just take 5 minutes to fill in some info, choose a killer template, and bam! Your personalized portfolio website is ready.</p>
            </div>
            <div className={styles.profileCard}>
                <div className={styles.image}>
                    <img src="/images/Saly-13.png" alt="" />
                </div>
                
                <div className={styles.content}>
                    <div className={styles.star}>
                        <img src="/images/Stars.png" alt="" />
                        <p>How It Works</p>
                    </div>
                    <h2>Complete Your Profile</h2>
                    <p>Just share your details, choose a template, and see your personal portfolio magically appear. Confirm or make any changes you like, and  Grab a special link to share your portfolio with everyone. Boost your online presence the easy way!</p>
                    <button>Complete Your Profile</button>
                </div>
            </div>
        </div>
    )
}