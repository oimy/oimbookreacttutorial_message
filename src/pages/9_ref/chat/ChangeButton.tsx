import { useContext } from "react";
import { Theme, ThemeContext } from "../ThemeContext";
import "./ChangeButton.scss";

export default function ChangeButton({
    name,
    direction,
    onClick,
}: {
    name: string;
    direction: "left" | "right";
    onClick: () => void;
}) {
    const theme = useContext<Theme>(ThemeContext);

    return (
        <button className={`box-friend ${direction} ${theme}`} onClick={() => onClick()}>
            {name}
            <i className={`fa-solid fa-arrow-${direction}`} />
        </button>
    );
}
