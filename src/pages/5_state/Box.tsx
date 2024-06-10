import "./Box.scss";
import Header from "./Header";
import Message from "./Message";
import Screen from "./Screen";

export default function Box() {
    return (
        <div className="layout">
            <div className="box">
                <Header name="Cherry" />
                <Screen>
                    <Message message="checked message" checked isOutgoing={false} />
                    <Message message="first message!" isOutgoing />
                    <Message message="second message~" isOutgoing />
                </Screen>
            </div>
        </div>
    );
}
