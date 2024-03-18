import { FC } from "react";
import { PrimaryHomePageCard } from "../../shared/model/homePageCard";
import { Card } from "../../shared/Component/Card/Card";
import styles from "./MainActions.module.css";

interface MainActionsProps {
    name: string;
    cards: PrimaryHomePageCard[];
}

export const MainActions: FC<MainActionsProps> = (props) => {
    const { name, cards } = props;

    return (
        <>
            <h1>Bonjour {name}, voici ce que vous pouvez faire aujourd'hui! </h1>
            <div className={styles.container}>
                {cards.map((card) => (
                    <Card {...card} />
                ))}
            </div>
        </>
    );
};
