import { useState } from "react";
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

    return (
        <div
            className={`message-box ${isOutgoing ? "out" : "in"}`}
            onClick={() => setHidden(!hidden)}
        >
            <span className="message-line">
                {hidden ? <i className="fa-solid fa-lock" /> : message}
            </span>
            {checked && <i className="fa-solid fa-check" />}
        </div>
    );
}
