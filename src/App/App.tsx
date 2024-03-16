import * as React from "react";
import { PageLayout } from "./shared/Component/PageLayout/PageLayout";
import { WelcomePage } from "./WelcomePage/WelcomePage";

export const App: React.FC = () => {
    return (
        <PageLayout>
            <WelcomePage />
        </PageLayout>
    );
};
