import "./Header.scss";

export default function Header({ name = "Cherry" }: { name?: string }) {
    return (
        <div className="header">
            <span className="header-title">{name}</span>
        </div>
    );
}
