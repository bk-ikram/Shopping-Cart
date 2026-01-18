import styles from "./Home.module.css";

function Home(){
    return (
    <main className={styles.main}>
      <div className={styles.mainCard}>
        <h3>
          Welcome to Chyne!
        </h3>
        <p>Your one stop shop to look as elegant and beautiful as you deserve to feel</p>
        <button className={"styled-button primary"}><p>Shop now</p></button>
      </div>
      <div className={styles.heroImage}>
      </div>
    </main>
    )
}

export default Home;