import { FC } from "react";
import { useFetchHomePageCards } from "./customHooks/fetchHomePageCardsHook";

export const WelcomePage: FC = () => {
    
    const fetchHomePageCardsState = useFetchHomePageCards();

    if (fetchHomePageCardsState.isLoading) {
      return <h1> LOADING </h1>
    }

    if (fetchHomePageCardsState.isError) {
        return <h1> ERROR </h1>
    }

    return (
        <>
            {/*
            <MainActionsSection />
            <AvailableWelfares />
             */}
        </>
    )
}