import { FC } from "react";
import logo from "./logo.svg";

export const Header: FC = () => {
    return (
        <header>
            <img src={logo} alt="Klaro logo" />
        </header>
    );
};
