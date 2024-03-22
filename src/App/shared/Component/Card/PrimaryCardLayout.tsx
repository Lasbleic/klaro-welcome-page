import { FC } from "react";
import { CardLayoutProps } from "./Card";
import { Title } from "../Title/Title";
import { LinkButton } from "../Button/LinkButton";
import styles from "./PrimaryCardLayout.module.css";

export const PrimaryCardLayout: FC<CardLayoutProps> = (props) => {
    const { title, illustrationSrc, buttonLabel } = props;

    return (
        <div className={styles.container}>
            <div>
                <Title type="h4" className={styles.title}>
                    {title}
                </Title>
                <LinkButton withChevron>{buttonLabel}</LinkButton>
            </div>
            {illustrationSrc && <img src={illustrationSrc} alt="Card description" />}
        </div>
    );
};
