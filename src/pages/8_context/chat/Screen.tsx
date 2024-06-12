import { ReactNode, useContext } from "react";
import { Theme, ThemeContext } from "../ThemeContext";
import "./Screen.scss";

export default function Screen({ children }: { children: ReactNode }) {
    const theme = useContext<Theme>(ThemeContext);

    return <div className={`screen ${theme}`}>{children}</div>;
}
