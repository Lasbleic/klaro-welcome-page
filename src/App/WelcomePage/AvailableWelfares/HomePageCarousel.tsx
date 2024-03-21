import { FC, useEffect, useRef, useState } from "react";
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

    const [currentlyVisibleCardIndex, setCurrentVisibleCardIndex] = useState(0);

    const carouselContainer = useRef<HTMLDivElement>(null);
    const { isLeftArrowVisible, isRightArrowVisible } = useCarouselControlHooks(
        carouselContainer,
        currentlyVisibleCardIndex,
        cards.length
    );

    const carouselItemsRef = useRef<Array<HTMLDivElement | null>>([]);
    // Make sure carousel item ref array is cleaned when the cards list update
    useEffect(() => {
        carouselItemsRef.current = carouselItemsRef.current.slice(0, cards.length);
    }, [cards]);

    // Reset scroll at init to align with currentVisibleCardIndex
    useEffect(() => {
        carouselContainer.current?.scroll(0, 0);
    }, []);

    return (
        <>
            <div className={styles.container} ref={carouselContainer}>
                {cards.map((card, i) => (
                    <div key={card.id} className={styles.carouselItem} ref={(el) => (carouselItemsRef.current[i] = el)}>
                        <Card {...card} key={card.id} />
                    </div>
                ))}
            </div>
            {isLeftArrowVisible && (
                <RoundButton
                    onClick={() => {
                        carouselItemsRef.current[currentlyVisibleCardIndex - 1]?.scrollIntoView({ behavior: "smooth" });
                        setCurrentVisibleCardIndex(currentlyVisibleCardIndex - 1);
                    }}
                    facing="left"
                />
            )}
            {isRightArrowVisible && (
                <RoundButton
                    onClick={() => {
                        if (currentlyVisibleCardIndex >= cards.length) {
                            return;
                        }
                        carouselItemsRef.current[currentlyVisibleCardIndex + 1]?.scrollIntoView({ behavior: "smooth" });
                        setCurrentVisibleCardIndex(currentlyVisibleCardIndex + 1);
                    }}
                />
            )}
        </>
    );
};
