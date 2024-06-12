import { useContext } from "react";
import { Theme, ThemeContext } from "../ThemeContext";
import "./Header.scss";

export default function Header({ onClickTheme }: { onClickTheme: () => void }) {
    const theme = useContext(ThemeContext);

    function renderIcon(theme: Theme) {
        if (theme === "light") {
            return <i className="fa-solid fa-sun" />;
        }
        return <i className="fa-solid fa-moon" />;
    }

    return (
        <div className={`friend-header ${theme}`}>
            <span className="title">Chat Friends</span>
            <button className="theme" onClick={() => onClickTheme()}>
                {renderIcon(theme)}
            </button>
        </div>
    );
}
