import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatBox1Component from "./pages/1_component/ChatBox";
import ChatBox2Props from "./pages/2_props/ChatBox";
import ChatBox3Condition from "./pages/3_condition/ChatBox";
import ChatBox4Condition from "./pages/4_css/ChatBox";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ChatBox4Condition />} />
                    <Route path="/1-component" element={<ChatBox1Component />} />
                    <Route path="/2-props" element={<ChatBox2Props />} />
                    <Route path="/3-condition" element={<ChatBox3Condition />} />
                    <Route path="/4-css" element={<ChatBox4Condition />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
