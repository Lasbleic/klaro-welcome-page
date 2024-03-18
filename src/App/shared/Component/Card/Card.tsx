import { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {
    title: string;
    illustrationSrc: string;
    buttonLabel: string;
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

const PrimaryCardLayout: FC<Omit<CardProps, "type">> = (props) => {
    const { title, illustrationSrc, buttonLabel } = props;

    return (
        <>
            <div>
                <h4>{title}</h4>
                <button>{buttonLabel}</button>
            </div>
            <img src={illustrationSrc} alt="Card description" />
        </>
    );
};

const SecondaryCardLayout: FC<Omit<CardProps, "type">> = (props) => {
    const { title, illustrationSrc, buttonLabel } = props;

    return (
        <>
            <h5>{title}</h5>
            <img src={illustrationSrc} alt="Card description" />
            <button>{buttonLabel}</button>
        </>
    );
};
