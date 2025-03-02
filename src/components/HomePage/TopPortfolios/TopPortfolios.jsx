import styles from "./TopPortfolios.module.css";

export default function TopPortfolios() {
    return(
        <div className={styles.container}>
            <h1>Top Rated Portfolios</h1>
            <div className={styles.cardsContainer}>
                <div className={styles.portfolioCard}>
                    <div className={styles.star}>
                        <img src="images/Stars.png" alt="" />
                        <p>How it works</p>
                    </div>
                    <h2>Customize This Template</h2>
                    <p>Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>
                    <img src="images/Portfolio-card.png" alt="" />
                </div>
                <div className={styles.portfolioCard}>
                    <div className={styles.star}>
                        <img src="images/Stars.png" alt="" />
                        <p>How it works</p>
                    </div>
                    <h2>Customize This Template</h2>
                    <p>Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>
                    <img src="images/Portfolio-card.png" alt="" />
                </div>
                <div className={styles.portfolioCard}>
                    <div className={styles.star}>
                        <img src="images/Stars.png" alt="" />
                        <p>How it works</p>
                    </div>
                    <h2>Customize This Template</h2>
                    <p>Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>
                    <img src="images/Portfolio-card.png" alt="" />
                </div>
                <div className={styles.portfolioCard}>
                    <div className={styles.star}>
                        <img src="images/Stars.png" alt="" />
                        <p>How it works</p>
                    </div>
                    <h2>Customize This Template</h2>
                    <p>Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>
                    <img src="images/Portfolio-card.png" alt="" />
                </div>
            </div>
        </div>
    )
}