import { FC } from "react";

interface CardProps {
    title: string;
    illustrationSrc: string;
    buttonLabel: string;
}

export const Card: FC<CardProps> = (props) => {
    const { title, illustrationSrc, buttonLabel } = props;
    return (
        <>
            <h4>{title}</h4>
            <img src={illustrationSrc} alt="Card description" />
            <button>{buttonLabel}</button>
        </>
    );
};
