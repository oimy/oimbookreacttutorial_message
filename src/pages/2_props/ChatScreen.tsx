import { ReactNode } from "react";

export default function ChatScreen({ children }: { children: ReactNode }) {
    return (
        <div
            style={{
                height: "270px",
            }}
        >
            {children}
        </div>
    );
}
