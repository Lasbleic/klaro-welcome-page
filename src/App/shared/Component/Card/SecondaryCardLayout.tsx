import { FC } from "react";
import { CardLayoutProps } from "./Card";
import styles from "./SecondaryCardLayout.module.css";

export const SecondaryCardLayout: FC<CardLayoutProps> = (props) => {
    const { title, illustrationSrc, buttonLabel } = props;

    return (
        <div className={styles.container}>
            <h5>{title}</h5>
            <img src={illustrationSrc} alt="Card description" />
            <button>{buttonLabel}</button>
        </div>
    );
};
