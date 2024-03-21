import { FC } from "react";
import { CarouselArrowButton } from "./CarouselArrowButton";
import styles from "./CarouselArrow.module.css";

interface CarouselArrowProps {
    type: "left" | "right";
    scroll: () => void;
}

export const CarouselArrow: FC<CarouselArrowProps> = (props) => {
    const { type, scroll } = props;

    const className = `${styles.baseArrowBackground} ${type === "right" && styles.rightArrowBackground} ${
        type === "left" && styles.leftArrowBackground
    }`;

    return (
        <div className={className}>
            <CarouselArrowButton onClick={scroll} />
        </div>
    );
};
