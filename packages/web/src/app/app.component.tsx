import { AppRoutes } from "./route/app.route"
import styles from "../style/global.module.css"
import { Header } from "../module/header/header.component"

export function App() {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.root}>
      <Header />
      <AppRoutes />
    </div>
  )
}
