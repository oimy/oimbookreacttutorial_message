import Header from "./Header";
import "./List.scss";

export default function List({
    names,
    onClickListItem: onClick,
}: {
    names: string[];
    onClickListItem: (name: string) => void;
}) {
    return (
        <div className="layout">
            <div className="box">
                <Header />
                {names.map((name) => (
                    <div className="list-item" onClick={() => onClick(name)}>
                        <span className="name">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
