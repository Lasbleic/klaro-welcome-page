import { FC } from "react";
import { ReactComponent as Loader } from "../shared/icons/loader_klaro.svg";
import styles from "./LoadingState.module.css";

export const LoadingState: FC = () => {
    return (
        <div className={styles.container}>
            <Loader className={styles.loader} />
        </div>
    );
};
