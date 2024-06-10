import { ReactNode } from "react";
import "./ChatScreen.css";

export default function ChatScreen({ children }: { children: ReactNode }) {
    return (
        <div
            className="chat-screen"
            style={{
                height: "270px",
            }}
        >
            {children}
        </div>
    );
}
