import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { componentRoutes } from "./routes";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {componentRoutes.map(
                        (route) =>
                            route.component && (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            )
                    )}
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
