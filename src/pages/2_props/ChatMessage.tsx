export default function ChatMessage({ message }: { message: string }) {
    return (
        <div
            style={{
                padding: "10px",
            }}
        >
            {message}
        </div>
    );
}
