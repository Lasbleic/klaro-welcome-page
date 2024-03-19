import { FC } from "react";
import { PrimaryHomePageCard } from "../../shared/model/homePageCard";
import { Card } from "../../shared/Component/Card/Card";
import { Title } from "../../shared/Component/Title/Title";
import styles from "./MainActions.module.css";

interface MainActionsProps {
    name: string;
    cards: PrimaryHomePageCard[];
}

export const MainActions: FC<MainActionsProps> = (props) => {
    const { name, cards } = props;

    return (
        <>
            <Title type="h1">Bonjour {name}, voici ce que vous pouvez faire aujourd'hui! </Title>
            <div className={styles.container}>
                {cards.map((card) => (
                    <Card {...card} />
                ))}
            </div>
        </>
    );
};
