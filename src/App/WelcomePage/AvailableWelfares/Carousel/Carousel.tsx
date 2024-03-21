import { FC, PropsWithChildren, useRef } from "react";
import { useCarouselControlHooks } from "../customHooks/useCarouselControlHooks";
import { CarouselArrow } from "./CarouselArrow";
import styles from "./Carousel.module.css";

export const Carousel: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    const carouselContainer = useRef<HTMLDivElement>(null);
    const { isLeftArrowVisible, isRightArrowVisible, scrollRight, scrollLeft } =
        useCarouselControlHooks(carouselContainer);

    return (
        <div className={`${styles.relative} ${styles.hideScrollbar}`}>
            <div className={styles.container} ref={carouselContainer}>
                {children}
            </div>
            {isLeftArrowVisible && <CarouselArrow type="left" scroll={scrollLeft} />}
            {isRightArrowVisible && <CarouselArrow type="right" scroll={scrollRight} />}
        </div>
    );
};
