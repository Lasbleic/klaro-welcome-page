interface BaseHomePageCard {
    id: string;
    title: string;
    illustrationSrc: string;
    buttonLabel: string;
}

export interface PrimaryHomePageCard extends BaseHomePageCard {
    type: "primary";
}

export interface SecondaryHomePageCard extends BaseHomePageCard {
    type: "secondary";
}

export type HomePageCard = PrimaryHomePageCard | SecondaryHomePageCard;