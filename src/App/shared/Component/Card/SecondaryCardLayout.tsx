import { FC } from "react";
import { CardLayoutProps } from "./Card";
import { Title } from "../Title/Title";
import { LinkButton } from "../Button/LinkButton";
import styles from "./SecondaryCardLayout.module.css";

export const SecondaryCardLayout: FC<CardLayoutProps> = (props) => {
    const { title, illustrationSrc, buttonLabel } = props;

    return (
        <div className={styles.container}>
            <Title type="h5">{title}</Title>
            <img src={illustrationSrc} alt="Card description" className={styles.illustration} />
            <LinkButton>{buttonLabel}</LinkButton>
        </div>
    );
};
