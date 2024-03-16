import { FC, PropsWithChildren } from "react";
import logo from "./logo.svg";
import styles from "./PageLayout.module.css";

export const PageLayout: FC<PropsWithChildren> = (props) => {
    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="Klaro logo" />
            </header>
            <main className={styles.main}>{props.children}</main>
        </>
    );
};
