import "./ChatHeader.scss";

export default function ChatHeader({ name = "Cherry" }: { name?: string }) {
    return (
        <div
            style={{
                width: "100%",
                height: "50px",
                borderBottom: "1px solid lightgray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <span className="chat-header-title">Chat with {name}</span>
        </div>
    );
}
