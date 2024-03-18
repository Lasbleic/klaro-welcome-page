import { FC } from "react";
import { SecondaryHomePageCard } from "../../shared/model/homePageCard";
import { Card } from "../../shared/Component/Card/Card";
import styles from "./AvailableWelfares.module.css";

interface AvailableWelfaresProps {
    cards: SecondaryHomePageCard[];
}

export const AvailableWelfares: FC<AvailableWelfaresProps> = (props) => {
    const { cards } = props;

    return (
        <>
            <h1>Les aides disponibles</h1>
            <div className={styles.container}>
                {cards.map((card) => (
                    <Card {...card} key={card.id} />
                ))}
            </div>
        </>
    );
};
