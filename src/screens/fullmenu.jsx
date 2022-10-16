import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import { Container, Box, Typography, Button, Chip, Avatar } from '@mui/material';
import menuData from "../components/MenuData";
import FeaturedFavorites from "./fullmenu_screens/featuredfavorites";
import Breakfast from "./fullmenu_screens/breakfast";
import Burgers from "./fullmenu_screens/burgers";
import ChickenFishSandwiches from "./fullmenu_screens/chickenandfishsandwiches";
import McNuggetsandMeals from "./fullmenu_screens/mcnuggetsandmeals";
import Footer from "../components/Footer";

export default function FullMenu() {
    const [allCategories, setAllCategories] = useState([]);
    const navigate = useNavigate();

    let getCategories = () => {
        let li = menuData.map((x) => x.category);
        li = [...new Set([...li])];
        setAllCategories([...li]);
    };

    let selectCategory = (e) => {
        e = e.replace(/ /g , "");
        (navigate(`/fullmenu/${e}`))
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <Navbar />
            <Container sx={{ display: "flex", margin: "80px auto" }}>
                <Box sx={{ margin: "80px 0" }}>

                    {/* Mapping all Categories */}
                    {allCategories && allCategories.length > 0
                        ? allCategories.map((e, i) => {
                            return (
                                <>
                                    <Box sx={{ display: "flex" }}>
                                        <Chip sx={{ margin: 1, textTransform: "capitalize", fontSize: 18 }}
                                            label={e} onClick={() => selectCategory(e)} />
                                    </Box>
                                </>
                            )
                        })
                        : null}
                </Box>

                <Box>
                    <Typography variant="h2" 
                    sx={{ fontWeight:"bold", textAlign: "center", alignContent: "center", margin: "10px auto" }}>
                        McDonald's Menu
                    </Typography>

                    <Routes>
                        <Route path="featuredfavorites" element={<FeaturedFavorites />} />
                        <Route path="breakfast" element={<Breakfast />} />
                        <Route path="burgers" element={<Burgers />} />
                        <Route path="chickenandfishsandwiches" element={<ChickenFishSandwiches />} />
                        <Route path="mcnuggetsandmeals" element={<McNuggetsandMeals />} />
                    </Routes>

                </Box>
            </Container>
            <Footer />
        </>
    )
};