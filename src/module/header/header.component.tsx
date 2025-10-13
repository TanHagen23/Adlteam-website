import styles from "./header.module.css";
import Logo from "../../assets/logo adl 1.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.logo} src={Logo} alt="logo" />
        </div>

        <button className={styles.btn} type="button">
          Услуги
        </button>

        <button className={styles.btn} type="button">
          Проекты
        </button>

        <button className={styles.btn} type="button">
          О компании
        </button>

        <button className={styles.btn} type="button">
          Блог
        </button>

        <a href="tel:+992123456789" className={styles.tgnumber}>
          +992 123456789
        </a>
      </div>
    </header>
  );
}
