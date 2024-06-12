import { ReactNode } from "react";
import "./Screen.scss";

export default function Screen({ children }: { children: ReactNode }) {
    return <div className="screen">{children}</div>;
}
