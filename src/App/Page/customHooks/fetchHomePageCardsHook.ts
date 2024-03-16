import { useState, useEffect } from "react";
import { HomePageCard, PrimaryHomePageCard, SecondaryHomePageCard } from "../model/homePageCard";


interface FetchHomePageCardsLoadingState {
    isLoading: true;
}

interface FetchHomePageCardsErrorState {
    isLoading: false;
    isError: true;
}

interface FetchHomePageCardsFetchedState {
    isLoading: false;
    isError: false;
    primaryHomePageCards: PrimaryHomePageCard[];
    secondaryHomePageCards: SecondaryHomePageCard[];
}

type FetchHomePageCardsState = FetchHomePageCardsLoadingState | FetchHomePageCardsErrorState | FetchHomePageCardsFetchedState;

export const useFetchHomePageCards = (): FetchHomePageCardsState => {
    const [homePageCardsState, setHomePageCardsState] = useState<FetchHomePageCardsState>({ isLoading : true })
    
    // This whole useEffect could be abstracted as a useFetch to be reused, but at this point of refactor, we'd better use a proper framework
    useEffect(() => {
        let isFetchRegistrated = true;

        const fetchData = async () => {
            try {
                const response = await fetch("https://64f98ead4098a7f2fc149a34.mockapi.io/api/homepage-cards");
                
                if (!isFetchRegistrated) {
                    return;
                }

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const homePageCards = await response.json() as HomePageCard[];
                if (!homePageCards) {
                    throw new Error();
                }
                    
                const primaryHomePageCards: PrimaryHomePageCard[] = [];
                const secondaryHomePageCards: SecondaryHomePageCard[] = [];
                for (const card of homePageCards) {
                    switch(card.type) {
                        case "primary":
                            primaryHomePageCards.push(card);
                            break;
                        case "secondary":
                            secondaryHomePageCards.push(card);
                            break;
                    }
                }

                setHomePageCardsState({
                    isLoading: false,
                    isError: false,
                    primaryHomePageCards: primaryHomePageCards,
                    secondaryHomePageCards: secondaryHomePageCards,
                });

            } catch {
                setHomePageCardsState({
                    isLoading: false,
                    isError: true,
                })
            }
        }
        
          
        fetchData()

        // cancel any future `setHomePageCardsState`
        const unregistratingFunction = () => { isFetchRegistrated = false };
        return unregistratingFunction;
    }, [])

    return homePageCardsState;
}