import { FC } from "react";
import { SecondaryHomePageCard } from "../../shared/model/homePageCard";
import { Title } from "../../shared/Component/Title/Title";
import { Carousel } from "./Carousel/Carousel";
import styles from "./AvailableWelfares.module.css";
import { Card } from "../../shared/Component/Card/Card";

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
            <Carousel>
                {cards.map((card, i) => (
                    <Card {...card} key={card.id} />
                ))}
            </Carousel>
        </section>
    );
};
