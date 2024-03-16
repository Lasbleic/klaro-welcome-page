import * as React from "react";
import logo from "./logo.svg"

export const Header: React.FC = () => {
    return (
        <header>
            <img src={logo} alt="Klaro logo"/>
        </header>
    )
}