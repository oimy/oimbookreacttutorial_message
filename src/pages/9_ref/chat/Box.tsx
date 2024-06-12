import { useState } from "react";
import "./Box.scss";
import Header from "./Header";
import Input from "./Input";
import Message from "./Message";
import Screen from "./Screen";
import Video from "./Video";

export default function Box({ name, onClickList }: { name: string; onClickList: () => void }) {
    const [newMessages, setNewMessages] = useState<string[]>([]);

    return (
        <div className="layout">
            <div className="box">
                <Header name={name} onClickList={onClickList} />
                <Screen>
                    <Message message="show something!" isOutgoing />
                    <Video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                    {newMessages.map((message) => (
                        <Message message={message} isOutgoing />
                    ))}
                </Screen>
                <Input onSubmit={(message: string) => setNewMessages([...newMessages, message])} />
            </div>
        </div>
    );
}