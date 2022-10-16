import React from "react"
import { useState, useEffect } from "react";
import { Container, Typography, Grid } from '@mui/material';
import menuData from "../../components/MenuData";

export default function Breakfast() {

    const [filterList, setFilterList] = useState([]);
    
    let getBreakfast = () => {
    let filteredList = menuData.filter(
        (x) =>
            x.category == 'breakfast'
    );
    setFilterList([...filteredList]);
}
    useEffect(() => {
        getBreakfast();
      }, []);

    return (
        <>
            <Container sx={{ textAlign: "center", alignContent: "center", margin: "10px auto" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Breakfast
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