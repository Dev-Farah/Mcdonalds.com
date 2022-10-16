import React from "react"
import { useState, useEffect } from "react";
import { Container, Typography, Grid } from '@mui/material';
import menuData from "../../components/MenuData";

export default function McNuggetsandMeals() {

    const [filterList, setFilterList] = useState([]);

    let getMcNuggetsandMeals = () => {
        let filteredList = menuData.filter(
            (x) =>
                x.category == 'mc nuggets and meals'
        );
        setFilterList([...filteredList]);
    }
    useEffect(() => {
        getMcNuggetsandMeals();
    }, []);

    return (
        <>
            <Container sx={{ textAlign: "center", alignContent: "center", margin: "10px auto" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    McNuggets® and Meals
                </Typography>
                <Grid container>
                    {filterList.map((e, i) => {
                        return (
                            <>
                                <Grid item m={3} lg={3} md={5} sm={12}>
                                    <img src={e.image} width="180px" />
                                    <Typography variant="h6">
                                        {e.title}
                                    </Typography>
                                </Grid>
                            </>
                        )
                    }
                    )}
                </Grid>
            </Container>
        </>
    )
}