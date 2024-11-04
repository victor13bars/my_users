import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../../../pages/main/ui/MainPage/MainPage";
import { Favorites } from "../../../../pages/favorites/ui/Favorites";
import { NotFound } from "../../../../pages/notFound/ui/NotFound/NotFound";
import styles from "./Layout.module.css";
import { Header } from "../../../../widgets/Header";

export function Layout() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
