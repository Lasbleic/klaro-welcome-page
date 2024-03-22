import { FC } from "react";
import { Card } from "../shared/Component/Card/Card";
import styles from "./ErrorState.module.css";

export const ErrorState: FC = () => {
    return (
        <Card
            type="primary"
            title="Une erreur est survenue"
            buttonLabel="Contacter le support"
            className={styles.card}
        />
    );
};
