import { componentRoutes } from "../../routes";
import "./Home.scss";

export default function Home() {
    return (
        <div className="chapter-container">
            {componentRoutes.map((route) => (
                <div className="chapter-box">
                    <a href={route.path} aria-hidden={false} style={{ textDecoration: "none" }}>
                        <span className="chapter-item">{route.title}</span>
                    </a>
                    <a
                        href={route.postUrl}
                        target="_tab"
                        aria-hidden={true}
                        style={{ textDecoration: "none" }}
                    >
                        <span className="chapter-icon">
                            <i className="fa-solid fa-link" />
                        </span>
                    </a>
                </div>
            ))}
        </div>
    );
}
