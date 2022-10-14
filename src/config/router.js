import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Importing All Pages
import Home from "../screens/index";
import DownloadApp from "../screens/downloadapp";
import MyMcDonaldsRewards from "../screens/mymcdonaldsrewards";
import ExclusiveDeals from "../screens/exclusivedeals";
import AboutOurFood from "../screens/aboutourfood";
import Locate from "../screens/locate";
import NotFound from "../screens/notfound";

export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="DownloadApp" element={<DownloadApp />} />
                    <Route path="MyMcDonaldsRewards" element={<MyMcDonaldsRewards />} />
                    <Route path="ExclusiveDeals" element={<ExclusiveDeals />} />
                    <Route path="AboutOurFood" element={<AboutOurFood />} />
                    <Route path="Locate" element={<Locate />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}
