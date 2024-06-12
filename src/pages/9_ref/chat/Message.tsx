import { useContext, useState } from "react";
import { Theme, ThemeContext } from "../ThemeContext";
import "./Message.scss";

export default function Message({
    message,
    checked = false,
    isOutgoing,
}: {
    message: string;
    checked?: boolean;
    isOutgoing: boolean;
}) {
    const [hidden, setHidden] = useState<boolean>(false);

    const theme = useContext<Theme>(ThemeContext);

    return (
        <div
            className={`message-box ${isOutgoing ? "out" : "in"} ${theme}`}
            onClick={() => setHidden(!hidden)}
        >
            <span className="message-line">
                {hidden ? <i className="fa-solid fa-lock" /> : message}
            </span>
            {checked && <i className="fa-solid fa-check" />}
        </div>
    );
}
