import { FC } from "react";
import { SecondaryHomePageCard } from "../model/homePageCard";

interface AvailableWelfaresProps {
    cards: SecondaryHomePageCard[];
}

export const AvailableWelfares: FC<AvailableWelfaresProps> = (props) => {
    const { cards } = props;

    return (
        <>
            {cards.map((card) => (
                <h3 key={card.id}>
                    {card.id} - {card.title}
                </h3>
            ))}
        </>
    );
};
