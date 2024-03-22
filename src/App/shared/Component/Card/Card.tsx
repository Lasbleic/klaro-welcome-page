import { FC } from "react";
import styles from "./Card.module.css";
import { PrimaryCardLayout } from "./PrimaryCardLayout";
import { SecondaryCardLayout } from "./SecondaryCardLayout";

export interface CardLayoutProps {
    title: string;
    buttonLabel: string;
    illustrationSrc?: string;
    className?: string;
}

interface CardProps extends CardLayoutProps {
    type: "primary" | "secondary";
}

export const Card: FC<CardProps> = (props) => {
    const { type, className, ...other } = props;

    const computedClassName = `${styles.baseCard} ${type === "primary" && styles.primaryCard} ${
        type === "secondary" && styles.secondaryCard
    } ${className}`;

    return (
        <article className={computedClassName}>
            {type === "primary" && <PrimaryCardLayout {...other} />}
            {type === "secondary" && <SecondaryCardLayout {...other} />}
        </article>
    );
};
