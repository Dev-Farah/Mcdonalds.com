import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Importing All Pages
import Home from "../screens/index";
import Logo from "../images/logo.jpg";
import DownloadApp from "../screens/downloadapp";
import MyMcDonaldsRewards from "../screens/mymcdonaldsrewards";
import ExclusiveDeals from "../screens/exclusivedeals";
import AboutOurFood from "../screens/aboutourfood";
import Locate from "../screens/locate";
import NotFound from "../screens/notfound";

// Importing MUI Components & Icons
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function AppRouter() {
    return (
        <>
            <Router>
                <AppBar position="static" sx={{ color: "#000000", backgroundColor: "#ffffff", boxShadow: "0 0.0625rem 0.5rem 0 rgb(0 0 0 / 4%), 0 0.0625rem 0.3125rem 0 rgb(0 0 0 / 4%)" }}>

                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Link to="/"><img src={Logo} alt="Logo" /></Link>

                        {/* Navbar line 1 */}
                        <Box sx={{ width: "75%" }}>
                            <Toolbar sx={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap" }}>
                                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                                    <Typography variant="caption">Language </Typography><ExpandMoreIcon />
                                    <Typography mx={4} variant="caption">Sign Up for Email</Typography>
                                    <Typography variant="caption">Careers</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                                    <SearchIcon />
                                    <Typography mr={4} variant="caption">Search</Typography>

                                    <FmdGoodOutlinedIcon />
                                    <Link to="Locate">
                                        <Typography mr={4} color={"#216BAE"} variant="caption">Change your location</Typography>
                                    </Link>

                                    <Button className="button" variant="contained">Order Now</Button>
                                </Box>
                            </Toolbar>

                            {/* Navbar line 2 */}
                            <Toolbar sx={{ display: 'flex', flexWrap: "wrap" }}>
                                <Box className="nav-link">
                                    <Link to="/" style={{ display: 'flex', justifyContent: "center", alignItems: "center", color: "#000", textDecoration: "none" }}>
                                        Our Menu<ExpandMoreIcon />
                                    </Link>
                                </Box>
                                <Link to="downloadapp" className="nav-link">Download App</Link>
                                <Link to="MyMcDonaldsRewards" className="nav-link">MyMcDonald's Rewards</Link>
                                <Link to="ExclusiveDeals" className="nav-link">Exclusive Deals</Link>
                                <Link to="AboutOurFood" className="nav-link">About Our Food</Link>
                                <Link to="Locate" className="nav-link">Locate</Link>
                            </Toolbar>
                        </Box>
                    </Box>
                </AppBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="downloadapp" element={<DownloadApp />} />
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
