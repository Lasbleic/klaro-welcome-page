import { FC } from "react";
import { SecondaryHomePageCard } from "../../shared/model/homePageCard";
import { Title } from "../../shared/Component/Title/Title";
import { HomePageCarousel } from "./HomePageCarousel";
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
            <HomePageCarousel cards={cards} />
        </section>
    );
};
