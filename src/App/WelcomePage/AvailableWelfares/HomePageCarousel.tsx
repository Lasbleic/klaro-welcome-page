import { FC, useEffect, useRef, useState } from "react";
import { Card } from "../../shared/Component/Card/Card";
import { HomePageCard } from "../../shared/model/homePageCard";
import { useCarouselControlHooks } from "./customHooks/useCarouselControlHooks";
import styles from "./HomePageCarousel.module.css";

interface HomePageCarousel {
    cards: HomePageCard[];
}

export const HomePageCarousel: FC<HomePageCarousel> = (props) => {
    const { cards } = props;

    const [currentlyVisibleCardIndex, setCurrentVisibleCardIndex] = useState(0);

    const carouselContainer = useRef<HTMLDivElement>(null);

    const carouselItemsRef = useRef<Array<HTMLDivElement | null>>([]);

    const { isLeftArrowVisible, isRightArrowVisible } = useCarouselControlHooks(
        carouselContainer,
        currentlyVisibleCardIndex,
        cards.length
    );

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
                <button
                    onClick={() => {
                        carouselItemsRef.current[currentlyVisibleCardIndex - 1]?.scrollIntoView({ behavior: "smooth" });
                        setCurrentVisibleCardIndex(currentlyVisibleCardIndex - 1);
                    }}
                >
                    Previous
                </button>
            )}
            {isRightArrowVisible && (
                <button
                    onClick={() => {
                        if (currentlyVisibleCardIndex >= cards.length) {
                            return;
                        }
                        carouselItemsRef.current[currentlyVisibleCardIndex + 1]?.scrollIntoView({ behavior: "smooth" });
                        setCurrentVisibleCardIndex(currentlyVisibleCardIndex + 1);
                    }}
                >
                    Next
                </button>
            )}
        </>
    );
};
