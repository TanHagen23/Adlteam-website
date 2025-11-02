import styles from "./header.module.css"
import Logo from "../../assets/logo adl 1.png"
import "../../style/font-awesome.css"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.logo} src={Logo} alt="logo" />
        </div>

        <nav className={styles.nav} aria-label="Главное меню">
          <a className={styles.navLink} href="/">
            Услуги
          </a>
          <a className={styles.navLink} href="/">
            Проекты
          </a>
          <a className={styles.navLink} href="/">
            О компании
          </a>
          <a className={styles.navLink} href="/">
            Блог
          </a>
          <a className={styles.navLink} href="/">
            Контакты
          </a>
        </nav>

        <a href="gmail:yosinnurov2007@gmail.com" className={styles.tgnumber}>
          <i className="fa-brands fa-telegram"></i>
          yosinnurov2007@gmail.com
        </a>
      </div>
    </header>
  )
}
