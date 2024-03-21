import { FC } from "react";
import { ReactComponent as Chevron } from "../../../shared/icons/chevron.svg";
import styles from "./CarouselArrowButton.module.css";

interface CarouselArrowButtonProps {
    onClick: () => void;
}

export const CarouselArrowButton: FC<CarouselArrowButtonProps> = (props) => {
    const { onClick } = props;

    return (
        <button onClick={onClick} className={styles.button}>
            <Chevron className={styles.chevron} />
        </button>
    );
};
