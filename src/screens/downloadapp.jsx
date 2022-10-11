import React from 'react'
import { Container, Box, Typography } from "@mui/material";
import { HomePgDiv, MainHeading, HeadingAndPara } from "../components/Div"
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import AppPromo from '../images/AppPromo.jpg'
import AppStore from "../images/app_store_badge.png";
import GooglePlay from "../images/google_play_badge.png";

export default function DownloadApp() {
    return (
        <>
            <MainHeading text="McDonald's App" />
            <HomePgDiv src={img1} h4Text="The Cactus Plant Flea Market Box" pText="Cactus Plant Flea Market is in the house with a limited-edition box design and collectibles. Your faves like Big Mac® and 10 piece Chicken McNuggets® with a side of art? Yes please ::) Order in the app, 10/3-10/30." smallText="*At participating McDonald's for a limited time. While supplies last. Mobile order & pay at participating McDonald’s. Download and registration required." btnVal="Order in the App" />
            <HomePgDiv src={img2} h4Text="Free Fries Now. Free McDonald’s Later.*" pText="Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase." smallText="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required." btnVal="Download the App" />

            <Container sx={{ display: "flex", my: 12 }}>
                <img src={AppPromo} width="45%" height="45%" />

                <Box ml={3} my={3}>
                    <Typography fontWeight="bold" variant="h3">Deliciousness At Your Fingertips</Typography>
                    <br />
                    <br />
                    <Typography variant="p">Download the app for exclusive deals and easy ordering.</Typography>
                    <br />
                    <br />
                    <img src={AppStore} />
                    <img src={GooglePlay} />
                </Box>
            </Container>

            <Container sx={{ my: 20 }}>
            <HeadingAndPara variant="h4" fontWeight="bold" headingTxt="Deals and Much More" pText="With the McDonald’s app, you’ll get access to exclusive deals. Use the app to order ahead and pass the line with Mobile Order & Pay plus join MyMcDonald’s Rewards to earn points on every order to redeem for free McDonald's." />
            </Container>

        </>
    )
}