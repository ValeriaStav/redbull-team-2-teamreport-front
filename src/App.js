import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutesWithSideBar from "./Routes/RoutesWithSideBar";
import { routesNoSideBar } from "./Routes/RoutesNoSideBar";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    {routesNoSideBar()}
                    <Route path="*" element={<RoutesWithSideBar />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
