import { FC } from "react";
import { PrimaryHomePageCard } from "../model/homePageCard";

interface MainActionsProps {
    cards: PrimaryHomePageCard[];
}

export const MainActions: FC<MainActionsProps> = (props) => {
    const { cards } = props;

    return (
        <>
            {cards.map((card) => (
                <h2 key={card.id}>
                    {card.id} - {card.title}
                </h2>
            ))}
        </>
    );
};
