import { FC } from "react";
import { CardLayoutProps } from "./Card";
import { Title } from "../Title/Title";
import styles from "./PrimaryCardLayout.module.css";

export const PrimaryCardLayout: FC<CardLayoutProps> = (props) => {
    const { title, illustrationSrc, buttonLabel } = props;

    return (
        <div className={styles.container}>
            <div>
                <Title type="h4">{title}</Title>
                <button>{buttonLabel}</button>
            </div>
            <img src={illustrationSrc} alt="Card description" />
        </div>
    );
};
