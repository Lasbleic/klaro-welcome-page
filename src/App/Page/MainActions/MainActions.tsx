import { FC } from "react";
import { PrimaryHomePageCard } from "../../shared/model/homePageCard";
import { Card } from "../../shared/Component/Card";

interface MainActionsProps {
    name: string;
    cards: PrimaryHomePageCard[];
}

export const MainActions: FC<MainActionsProps> = (props) => {
    const { name, cards } = props;

    return (
        <>
            <h1>Bonjour {name}, voici ce que vous pouvez faire aujourd'hui! </h1>
            {cards.map((card) => (
                <Card {...card} />
            ))}
        </>
    );
};
