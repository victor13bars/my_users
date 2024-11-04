import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.links}>
        <NavLink  className={({ isActive }) => (isActive ? styles.active : styles.link)} to="/">
          Main
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
