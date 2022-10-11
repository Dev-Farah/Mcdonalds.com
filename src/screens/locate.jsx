import React from 'react'
import { Container, Box, TextField, Button } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';

export default function Locate() {
    return (
        <>
            <Container sx={{ display: "flex", alignItems: "center", my: 15 }}>
                <TextField sx={{ width: "80%" }} id="standard-basic" label="Zip or City & State" variant="standard" />
                <InputAdornment position="end">
                    <Button className="button" variant="contained"><SearchIcon /></Button>
                </InputAdornment>
                <Button sx={{ backgroundColor: "#fff", color: "#292929", margin: "0 10px", border: "1px solid #292929", boxShadow: "none", textTransform: "none" }} variant="contained"><MyLocationIcon sx={{ fontSize: "14px", mr: 1 }} /> Locate me</Button>
            </Container>

            <Container sx={{ display: "flex", alignItems: "center", my: 15 }}>
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6390189.30422194!2d-106.12146751983101!3d38.55198391559747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1665438783099!5m2!1sen!2sus" width="1100" height="800" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Container>

        </>
    )
}