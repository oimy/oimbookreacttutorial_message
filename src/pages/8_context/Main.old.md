```typescript
import { useEffect, useMemo, useState } from "react";
import "./Main.scss";
import Box from "./chat/Box";
import List from "./friend/List";

export type Theme = "light" | "dark";

export default function Main() {
    const [theme, setTheme] = useState<Theme>("light");
    const friendNames = useMemo(() => ["Apple", "Carrot", "Lemon"], []);

    const [selectedName, setSelectedName] = useState<string>("");
    const [previousName, setPreviousName] = useState<string>("");
    const [nextName, setNextName] = useState<string>("");

    useEffect(() => {
        if (selectedName === "") {
            return;
        }

        const nameIndex = friendNames.indexOf(selectedName);
        if (nameIndex === -1) {
            return;
        }

        if (nameIndex > 0) {
            setPreviousName(friendNames[nameIndex - 1]);
        } else {
            setPreviousName("");
        }
        if (nameIndex < friendNames.length - 1) {
            setNextName(friendNames[nameIndex + 1]);
        } else {
            setNextName("");
        }
    }, [friendNames, selectedName]);

    return (
        <div>
            {selectedName !== "" ? (
                <>
                    {previousName && (
                        <button
                            className="box-friend previous"
                            onClick={() => setSelectedName(previousName)}
                        >
                            {previousName}
                            <i className="fa-solid fa-arrow-left" />
                        </button>
                    )}
                    <Box
                        key={selectedName}
                        name={selectedName}
                        onClickList={() => setSelectedName("")}
                    />
                    {nextName && (
                        <button
                            className="box-friend next"
                            onClick={() => setSelectedName(nextName)}
                        >
                            <i className="fa-solid fa-arrow-right" />
                            {nextName}
                        </button>
                    )}
                </>
            ) : (
                <List
                    names={friendNames}
                    onClickListItem={(name) => {
                        setSelectedName(name);
                    }}
                    theme={theme}
                    onClickTheme={(theme: Theme) => {
                        setTheme(theme);
                    }}
                />
            )}
        </div>
    );
}
```
