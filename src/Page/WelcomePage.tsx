import { FC } from "react";
import { useFetchHomePageCards } from "./customHooks/fetchHomePageCardsHook";
import { AvailableWelfares } from "./AvailableWelfares/AvailableWelfares";
import { MainActions } from "./MainActions/MainActions";
import { ErrorState } from "./ErrorState";
import { LoadingState } from "./LoadingState";

export const WelcomePage: FC = () => {
    const fetchHomePageCardsState = useFetchHomePageCards();

    if (fetchHomePageCardsState.isLoading) {
        return <LoadingState />;
    }

    if (fetchHomePageCardsState.isError) {
        return <ErrorState />;
    }

    return (
        <>
            <MainActions cards={fetchHomePageCardsState.primaryHomePageCards} />
            <AvailableWelfares cards={fetchHomePageCardsState.secondaryHomePageCards} />
        </>
    );
};
