import { useEffect, useState, useLayoutEffect, RefObject } from "react";

const getIsScrollAvailable = (carouselContainerRef: HTMLDivElement | null): boolean => {
    if (!carouselContainerRef) {
        return false;
    }

    return carouselContainerRef.scrollWidth > carouselContainerRef.clientWidth;
};

const getIsScrollAtMaximumRight = (carouselContainerRef: HTMLDivElement | null): boolean => {
    if (!carouselContainerRef) {
        return false;
    }

    return carouselContainerRef.scrollLeft + carouselContainerRef.clientWidth >= carouselContainerRef.scrollWidth;
};

export const useCarouselControlHooks = (
    carouselContainer: RefObject<HTMLDivElement>,
    visibleItemIndex: number,
    itemsNumber: number
) => {
    const [isScrollAvailable, setIsScrollAvailable] = useState(false);
    const [isScrollAtMaximumRight, setIsScrollAtMaximumRight] = useState(false);

    useLayoutEffect(() => {
        const carouselContainerRef = carouselContainer.current;

        const onResizeCallback = () => {
            setIsScrollAvailable(getIsScrollAvailable(carouselContainerRef));
            setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainerRef));
        };

        window.addEventListener("resize", onResizeCallback);

        return () => window.removeEventListener("resize", onResizeCallback);
    }, [carouselContainer]);

    useEffect(() => {
        const carouselContainerRef = carouselContainer.current;

        const onScrollCallback = () => {
            setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainerRef));
        };

        setIsScrollAvailable(getIsScrollAvailable(carouselContainerRef));
        setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainerRef));

        carouselContainerRef?.addEventListener("scroll", onScrollCallback);

        return () => carouselContainerRef?.removeEventListener("scroll", onScrollCallback);
    }, [carouselContainer]);

    return {
        isLeftArrowVisible: visibleItemIndex > 0 && isScrollAvailable,
        isRightArrowVisible: visibleItemIndex < itemsNumber - 1 && isScrollAvailable && !isScrollAtMaximumRight,
    };
};
