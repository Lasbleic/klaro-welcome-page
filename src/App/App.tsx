import * as React from "react";
import { Header } from "./Header/Header";
import { WelcomePage } from "./Page/WelcomePage";

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <WelcomePage />
        </>
    );
};
