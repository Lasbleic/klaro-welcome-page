import * as React from "react";
import { Header } from "./Header/Header";
import { WelcomePage } from "./Page/WelcomePage";
import styles from "./App.module.css";

export const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <WelcomePage />
        </div>
    );
};
