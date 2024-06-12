import { useContext, useState } from "react";
import { Theme, ThemeContext } from "../ThemeContext";
import "./Input.scss";

const WAIT_SUBMIT_MILLISECOND = 500;

export default function Input({ onSubmit }: { onSubmit: (message: string) => void }) {
    const [message, setMessage] = useState<string>("");
    const [isWait, setIsWait] = useState<boolean>(false);

    const theme = useContext<Theme>(ThemeContext);

    function waitSubmit() {
        return new Promise((resolve) => setTimeout(resolve, WAIT_SUBMIT_MILLISECOND));
    }

    return (
        <div className={`input-box ${theme}`}>
            <form
                className="input-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    setIsWait(true);
                    waitSubmit().finally(() => {
                        setIsWait(false);
                        setMessage("");
                        onSubmit(message);
                    });
                }}
            >
                <i className="fa-solid fa-chevron-right" style={{ marginRight: "10px" }} />
                <input
                    className="input"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isWait}
                />
                <button className="send" type="submit" disabled={message.length === 0 || isWait}>
                    {isWait ? (
                        <i className="fa-solid fa-spinner" />
                    ) : (
                        <i className="fa-solid fa-paper-plane" />
                    )}
                </button>
            </form>
        </div>
    );
}
