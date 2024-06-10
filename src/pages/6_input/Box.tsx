import { useState } from "react";
import "./Box.scss";
import Header from "./Header";
import Input from "./Input";
import Message from "./Message";
import Screen from "./Screen";

export default function Box() {
    const [newMessages, setNewMessages] = useState<string[]>([]);

    return (
        <div className="layout">
            <div className="box">
                <Header name="Cherry" />
                <Screen>
                    <Message message="checked message" checked isOutgoing={false} />
                    <Message message="first message!" isOutgoing />
                    <Message message="second message~" isOutgoing />
                    {newMessages.map((message) => (
                        <Message message={message} isOutgoing />
                    ))}
                </Screen>
                <Input onSubmit={(message: string) => setNewMessages([...newMessages, message])} />
            </div>
        </div>
    );
}
