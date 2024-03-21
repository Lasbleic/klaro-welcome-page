import { FC, PropsWithChildren, useRef } from "react";
import { useCarouselControlHooks } from "../customHooks/useCarouselControlHooks";
import styles from "./Carousel.module.css";
import { RoundButton } from "./RoundButton";

export const Carousel: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    const carouselContainer = useRef<HTMLDivElement>(null);
    const { isLeftArrowVisible, isRightArrowVisible, scrollRight, scrollLeft } =
        useCarouselControlHooks(carouselContainer);

    return (
        <div className={styles.relative}>
            <div className={styles.container} ref={carouselContainer}>
                {children}
            </div>
            {isLeftArrowVisible && (
                <div className={styles.leftArrowBackground}>
                    <RoundButton onClick={scrollLeft} facing="left" />
                </div>
            )}
            {isRightArrowVisible && (
                <div className={styles.rightArrowBackground}>
                    <RoundButton onClick={scrollRight} />
                </div>
            )}
        </div>
    );
};
