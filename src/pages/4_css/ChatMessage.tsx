import styles from "./ChatMessage.module.css";

export default function ChatMessage({
    message,
    checked = false,
    isOutgoing,
}: {
    message: string;
    checked?: boolean;
    isOutgoing: boolean;
}) {
    return (
        <div
            style={{
                padding: "10px",
                textAlign: "left",
            }}
        >
            {checked && <i className={`fa-solid fa-check ${styles["check"]}`} />}
            {message}
            {isOutgoing ? (
                <i className="fa-solid fa-arrow-turn-up check" />
            ) : (
                <i className="fa-solid fa-arrow-turn-down check" />
            )}
        </div>
    );
}
