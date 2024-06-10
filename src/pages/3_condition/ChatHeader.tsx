export default function ChatHeader({ name = "Cherry" }: { name?: string }) {
    return (
        <div
            style={{
                width: "100%",
                height: "50px",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <span>Chat with {name}</span>
        </div>
    );
}
