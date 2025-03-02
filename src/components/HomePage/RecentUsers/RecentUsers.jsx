import styles from "./RecentUsers.module.css";

export default function RecentUsers() {
    return(
        <div className={styles.container}>
            <h2>
                Recent Users
            </h2>
            <div className={styles.usersContainer}>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
                <div className={styles.userCard}>
                    <img src="images/User.png" alt="user-img" />
                    <p>Yagna Kusumanchi</p>
                </div>
            </div>
        </div>
    )

}