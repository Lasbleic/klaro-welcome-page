import { FC, PropsWithChildren } from "react";
import styles from "./Title.module.css";

interface TitleProps {
    type: "h1" | "h4" | "h5";
    className?: string;
}

export const Title: FC<PropsWithChildren<TitleProps>> = (props) => {
    const { type, className, children } = props;

    switch (type) {
        case "h1":
            return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
        case "h4":
            return <h4 className={`${styles.h4} ${className}`}>{children}</h4>;
        case "h5":
            return <h5 className={`${styles.h5} ${className}`}>{children}</h5>;
    }
};
