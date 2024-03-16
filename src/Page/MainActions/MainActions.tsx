import { FC } from "react";
import { PrimaryHomePageCard } from "../model/homePageCard";
import { Card } from "../shared/Card";

interface MainActionsProps {
    cards: PrimaryHomePageCard[];
}

export const MainActions: FC<MainActionsProps> = (props) => {
    const { cards } = props;

    return (
        <>
            {cards.map((card) => (
                <Card {...card} />
            ))}
        </>
    );
};
