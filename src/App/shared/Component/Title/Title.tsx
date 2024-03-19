import { FC, PropsWithChildren } from "react";
import styles from "./Title.module.css";

interface TitleProps {
    type: "h1" | "h4" | "h5";
}

export const Title: FC<PropsWithChildren<TitleProps>> = (props) => {
    const { type, children } = props;

    switch (type) {
        case "h1":
            return <h1 className={styles.h1}>{children}</h1>;
        case "h4":
            return <h4 className={styles.h4}>{children}</h4>;
        case "h5":
            return <h5 className={styles.h5}>{children}</h5>;
    }
};
