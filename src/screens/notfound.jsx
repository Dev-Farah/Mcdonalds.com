import React from "react"
import error from '../images/404-error.webp';
import { Container, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <Container sx={{ textAlign: "center", alignContent: "center" }}>
                <Typography variant="h2">
                    Not Found
                </Typography>
                <img src={error} width="35%" alt="error" />
                <br />
                <NavLink to="/" style={{ textDecoration: "none" }}>
                    <Button variant="contained">Go Back</Button>
                </NavLink>
            </Container>
        </>
    )
}