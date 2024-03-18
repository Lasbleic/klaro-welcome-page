import { FC } from "react";
import styles from "./Card.module.css";
import { PrimaryCardLayout } from "./PrimaryCardLayout";
import { SecondaryCardLayout } from "./SecondaryCardLayout";

export interface CardLayoutProps {
    title: string;
    illustrationSrc: string;
    buttonLabel: string;
}

interface CardProps extends CardLayoutProps {
    type: "primary" | "secondary";
}

export const Card: FC<CardProps> = (props) => {
    const { type, ...other } = props;

    const className = `${styles.baseCard} ${type === "primary" && styles.primaryCard} ${
        type === "secondary" && styles.secondaryCard
    }`;

    return (
        <article className={className}>
            {type === "primary" && <PrimaryCardLayout {...other} />}
            {type === "secondary" && <SecondaryCardLayout {...other} />}
        </article>
    );
};
