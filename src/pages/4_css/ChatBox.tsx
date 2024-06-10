import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatScreen from "./ChatScreen";

export default function ChatBox() {
    return (
        <div className="chat-layout">
            <div className="chat-box">
                <ChatHeader name="Cherry" />
                <ChatScreen>
                    <ChatMessage message="first message!" checked isOutgoing />
                    <ChatMessage message="second message~" checked isOutgoing />
                    <ChatMessage message="unchecked message" isOutgoing={false} />
                </ChatScreen>
            </div>
        </div>
    );
}
