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
            <h1>Les aides disponibles</h1>
            {cards.map((card) => (
                <Card {...card} />
            ))}
        </>
    );
};
