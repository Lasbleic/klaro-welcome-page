import { FC } from "react";
import { SecondaryHomePageCard } from "../model/homePageCard";
import { Card } from "../shared/Card";

interface AvailableWelfaresProps {
    cards: SecondaryHomePageCard[];
}

export const AvailableWelfares: FC<AvailableWelfaresProps> = (props) => {
    const { cards } = props;

    return (
        <>
            {cards.map((card) => (
                <Card {...card} />
            ))}
        </>
    );
};
