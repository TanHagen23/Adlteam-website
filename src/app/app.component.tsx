import styles from "../style/global.module.css";
import { Header } from "../module/header/header.component";
import { AppRoutes } from "./route/app.route";

export function App() {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.root}>
      <Header />
      <AppRoutes />
    </div>
  );
}
