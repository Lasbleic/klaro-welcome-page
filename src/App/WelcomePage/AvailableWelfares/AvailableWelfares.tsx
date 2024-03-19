import { FC } from "react";
import { SecondaryHomePageCard } from "../../shared/model/homePageCard";
import { Card } from "../../shared/Component/Card/Card";
import { Title } from "../../shared/Component/Title/Title";
import styles from "./AvailableWelfares.module.css";

interface AvailableWelfaresProps {
    cards: SecondaryHomePageCard[];
}

export const AvailableWelfares: FC<AvailableWelfaresProps> = (props) => {
    const { cards } = props;

    return (
        <section>
            <Title type="h1" className={styles.title}>
                Les aides disponibles
            </Title>
            <div className={styles.container}>
                {cards.map((card) => (
                    <Card {...card} key={card.id} />
                ))}
            </div>
        </section>
    );
};
