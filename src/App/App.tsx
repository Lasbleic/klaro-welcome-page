import * as React from "react";
import { PageLayout } from "./shared/Component/PageLayout/PageLayout";
import { WelcomePage } from "./WelcomePage/WelcomePage";
import styles from "./App.module.css";

export const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <PageLayout>
                <WelcomePage />
            </PageLayout>
        </div>
    );
};
