import "./Header.scss";

export default function Header({
    name = "Cherry",
    onClickList,
}: {
    name?: string;
    onClickList: () => void;
}) {
    return (
        <div className="chat-header">
            <button className="menu-button" onClick={() => onClickList()}>
                <i className="fa-solid fa-bars" />
            </button>
            <span className="title">{name}</span>
        </div>
    );
}
