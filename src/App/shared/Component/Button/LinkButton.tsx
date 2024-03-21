import { FC, PropsWithChildren } from "react";
import { ReactComponent as Chevron } from "../../icons/chevron.svg";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
    withChevron?: boolean;
}

export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = (props) => {
    const { withChevron, children } = props;

    return (
        <button className={styles.linkButton}>
            <span className={`${styles.linkButtonText} ${withChevron && styles.linkButtonTextLeftAligned}`}>
                {children}
            </span>
            {withChevron && (
                <span className={styles.chevron}>
                    <Chevron />
                </span>
            )}
        </button>
    );
};
