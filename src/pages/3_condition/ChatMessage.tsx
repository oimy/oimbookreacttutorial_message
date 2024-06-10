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
            {checked && <i className="fa-solid fa-check" />}
            {message}
            {isOutgoing ? (
                <i className="fa-solid fa-arrow-turn-up" />
            ) : (
                <i className="fa-solid fa-arrow-turn-down" />
            )}
        </div>
    );
}
