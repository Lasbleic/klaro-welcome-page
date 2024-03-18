import { FC } from "react";
import { CardLayoutProps } from "./Card";
import styles from "./PrimaryCardLayout.module.css";

export const PrimaryCardLayout: FC<CardLayoutProps> = (props) => {
    const { title, illustrationSrc, buttonLabel } = props;

    return (
        <div className={styles.container}>
            <div>
                <h4>{title}</h4>
                <button>{buttonLabel}</button>
            </div>
            <img src={illustrationSrc} alt="Card description" />
        </div>
    );
};
