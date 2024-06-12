import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Header from "./Header";
import "./List.scss";

export default function List({
    names,
    onClickListItem,
    onClickTheme,
}: {
    names: string[];
    onClickListItem: (name: string) => void;
    onClickTheme: () => void;
}) {
    const theme = useContext(ThemeContext);

    return (
        <div className="layout">
            <div className={`box ${theme}`}>
                <Header
                    onClickTheme={() => {
                        onClickTheme();
                    }}
                />
                {names.map((name) => (
                    <div className="list-item" onClick={() => onClickListItem(name)}>
                        <span className="name">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
