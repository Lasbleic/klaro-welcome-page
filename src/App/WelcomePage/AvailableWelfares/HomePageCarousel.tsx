import { FC, useRef } from "react";
import { Card } from "../../shared/Component/Card/Card";
import { HomePageCard } from "../../shared/model/homePageCard";
import { useCarouselControlHooks } from "./customHooks/useCarouselControlHooks";
import styles from "./HomePageCarousel.module.css";
import { RoundButton } from "./RoundButton";

interface HomePageCarouselProps {
    cards: HomePageCard[];
}

export const HomePageCarousel: FC<HomePageCarouselProps> = (props) => {
    const { cards } = props;

    const carouselContainer = useRef<HTMLDivElement>(null);
    const { isLeftArrowVisible, isRightArrowVisible, scrollRight, scrollLeft } =
        useCarouselControlHooks(carouselContainer);

    return (
        <div className={styles.relative}>
            <div className={styles.container} ref={carouselContainer}>
                {cards.map((card, i) => (
                    <div key={card.id} className={styles.carouselItem}>
                        <Card {...card} key={card.id} />
                    </div>
                ))}
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
