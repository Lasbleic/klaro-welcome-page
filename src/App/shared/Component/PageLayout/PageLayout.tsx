import { FC } from "react";
import logo from "./logo.svg";
import styles from "./PageLayout.module.css";

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Klaro logo" />
        </header>
    );
};
