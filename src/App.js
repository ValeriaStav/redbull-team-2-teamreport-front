import React, { useCallback } from "react";
import { ToastContainer, } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import RoutesWithSideBar from "./Routes/RoutesWithSideBar";
import { routesNoSideBar } from "./Routes/RoutesNoSideBar";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    {routesNoSideBar()}
                    <Route
                        path="*"
                        element={<RoutesWithSideBar />}
                    />
                </Routes>
            </Router>
            <ToastContainer />
        </>
    );
};

export default App;
