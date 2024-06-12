import { useEffect, useMemo, useState } from "react";
import { Theme, ThemeContext } from "./ThemeContext";
import Box from "./chat/Box";
import ChangeButton from "./chat/ChangeButton";
import List from "./friend/List";

export default function Main() {
    const friendNames = useMemo(() => ["Apple", "Carrot", "Lemon"], []);

    const [selectedName, setSelectedName] = useState<string>("");
    const [previousName, setPreviousName] = useState<string>("");
    const [nextName, setNextName] = useState<string>("");

    const [theme, setTheme] = useState<Theme>("light");

    function handleClickTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

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
            <ThemeContext.Provider value={theme}>
                {selectedName !== "" ? (
                    <>
                        {previousName && (
                            <ChangeButton
                                name={previousName}
                                direction="left"
                                onClick={() => setSelectedName(previousName)}
                            />
                        )}
                        <Box
                            key={selectedName}
                            name={selectedName}
                            onClickList={() => setSelectedName("")}
                        />
                        {nextName && (
                            <ChangeButton
                                name={nextName}
                                direction="right"
                                onClick={() => setSelectedName(nextName)}
                            />
                        )}
                    </>
                ) : (
                    <List
                        names={friendNames}
                        onClickListItem={(name) => {
                            setSelectedName(name);
                        }}
                        onClickTheme={() => handleClickTheme()}
                    />
                )}
            </ThemeContext.Provider>
        </div>
    );
}
