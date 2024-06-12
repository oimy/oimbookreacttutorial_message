import { useContext } from "react";
import { Theme, ThemeContext } from "../ThemeContext";
import "./Header.scss";

export default function Header({
    name = "Cherry",
    onClickList,
}: {
    name?: string;
    onClickList: () => void;
}) {
    const theme = useContext<Theme>(ThemeContext);

    return (
        <div className={`chat-header ${theme}`}>
            <button className="menu-button" onClick={() => onClickList()}>
                <i className="fa-solid fa-bars" />
            </button>
            <span className="title">{name}</span>
        </div>
    );
}
