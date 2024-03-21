import { FC } from "react";
import { ReactComponent as Chevron } from "../../shared/icons/chevron.svg";
import styles from "./RoundButton.module.css";

interface RoundButtonProps {
    onClick: () => void;
    facing?: "right" | "left";
}

export const RoundButton: FC<RoundButtonProps> = (props) => {
    const { onClick, facing = "right" } = props;

    return (
        <button onClick={onClick} className={styles.button}>
            <Chevron className={`${styles.chevron} ${facing === "left" && styles.leftChevron}`} />
        </button>
    );
};
