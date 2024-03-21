import { useEffect, useState, useLayoutEffect, RefObject, useCallback } from "react";

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

const getIsScrollAtMaximumLeft = (carouselContainerRef: HTMLDivElement | null): boolean => {
    if (!carouselContainerRef) {
        return false;
    }

    return carouselContainerRef.scrollLeft === 0;
};

export const useCarouselControlHooks = (carouselContainer: RefObject<HTMLDivElement>) => {
    const [isScrollAvailable, setIsScrollAvailable] = useState(false);
    const [isScrollAtMaximumRight, setIsScrollAtMaximumRight] = useState(false);
    const [isScrollAtMaximumLeft, setIsScrollAtMaximumLeft] = useState(false);

    useLayoutEffect(() => {
        const carouselContainerRef = carouselContainer.current;

        const onResizeCallback = () => {
            setIsScrollAvailable(getIsScrollAvailable(carouselContainerRef));
            setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainerRef));
            setIsScrollAtMaximumLeft(getIsScrollAtMaximumLeft(carouselContainerRef));
        };

        window.addEventListener("resize", onResizeCallback);

        return () => window.removeEventListener("resize", onResizeCallback);
    }, [carouselContainer]);

    useEffect(() => {
        const carouselContainerRef = carouselContainer.current;

        const onScrollCallback = () => {
            setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainerRef));
            setIsScrollAtMaximumLeft(getIsScrollAtMaximumLeft(carouselContainerRef));
        };

        setIsScrollAvailable(getIsScrollAvailable(carouselContainerRef));
        setIsScrollAtMaximumRight(getIsScrollAtMaximumRight(carouselContainerRef));
        setIsScrollAtMaximumLeft(getIsScrollAtMaximumLeft(carouselContainerRef));

        carouselContainerRef?.addEventListener("scroll", onScrollCallback);

        return () => carouselContainerRef?.removeEventListener("scroll", onScrollCallback);
    }, [carouselContainer]);

    const scrollLeft = useCallback(() => {
        carouselContainer.current?.scrollTo({
            left: Math.max(carouselContainer.current.scrollLeft - 150, 0),
            behavior: "smooth",
        });
    }, [carouselContainer]);

    const scrollRight = useCallback(() => {
        carouselContainer.current?.scrollTo({
            left: Math.min(
                carouselContainer.current.scrollLeft + 150,
                carouselContainer.current.scrollWidth - carouselContainer.current.clientWidth
            ),
            behavior: "smooth",
        });
    }, [carouselContainer]);

    return {
        isLeftArrowVisible: isScrollAvailable && !isScrollAtMaximumLeft,
        isRightArrowVisible: isScrollAvailable && !isScrollAtMaximumRight,
        scrollLeft: scrollLeft,
        scrollRight: scrollRight,
    };
};
