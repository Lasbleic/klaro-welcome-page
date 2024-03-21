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
        const onResizeCallback = () => {
            setIsScrollAvailable(getIsScrollAvailable(carouselContainer.current));
            setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainer.current));
        };

        window.addEventListener("resize", onResizeCallback);

        return () => window.removeEventListener("resize", onResizeCallback);
    }, []);

    useEffect(() => {
        const onScrollCallback = () => {
            setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainer.current));
        };

        setIsScrollAvailable(getIsScrollAvailable(carouselContainer.current));
        setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainer.current));

        carouselContainer.current?.addEventListener("scroll", onScrollCallback);

        return () => carouselContainer.current?.removeEventListener("scroll", onScrollCallback);
    }, [carouselContainer]);

    return {
        isLeftArrowVisible: visibleItemIndex > 0 && isScrollAvailable,
        isRightArrowVisible: visibleItemIndex < itemsNumber - 1 && isScrollAvailable && !isScrollAtMaximumRight,
    };
};
