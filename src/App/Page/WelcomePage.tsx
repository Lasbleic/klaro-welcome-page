import { FC } from "react";
import { useFetchHomePageCards } from "../shared/customHooks/fetchHomePageCardsHook";
import { AvailableWelfares } from "./AvailableWelfares/AvailableWelfares";
import { MainActions } from "./MainActions/MainActions";
import { ErrorState } from "./ErrorState";
import { LoadingState } from "./LoadingState";

const USER_NAME = "Clément";

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
            <MainActions name={USER_NAME} cards={fetchHomePageCardsState.primaryHomePageCards} />
            <AvailableWelfares cards={fetchHomePageCardsState.secondaryHomePageCards} />
        </>
    );
};
