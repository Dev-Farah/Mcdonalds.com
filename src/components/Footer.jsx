import React from "react";
import '../App.css';

import { Container, Box, Grid, Divider, Typography } from '@mui/material';
import Logo from "../images/logo.jpg";
import AppStore from "../images/app_store_badge.png";
import GooglePlay from "../images/google_play_badge.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Box py={3} sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>

                        <ul>
                            <li className="li-header">About Us</li>
                            <li>About Us</li>
                            <li>Our History</li>
                            <li>Leadership Team</li>
                            <li>Values In Action</li>
                            <li>Franchise Info</li>
                            <li>Recalls & Alerts</li>
                            <li>Real Estate</li>
                            <li>Digital Accessibility</li>
                            <li>Investor Relations</li>
                            <li>News & Notifications</li>
                        </ul>

                        <ul>
                            <li className="li-header">Services</li>
                            <li>Services</li>
                            <li>Wi-Fi</li>
                            <li>Gift Cards</li>
                            <li>PlayPlaces & Parties</li>
                            <li>McDelivery®</li>
                            <li>Mobile Order & Pay</li>
                            <li>Trending Now</li>
                            <li>McDonald’s Merchandise</li>
                            <li>Family Fun Hub</li>
                            <li>MyMcDonald's Rewards</li>
                            <li>McCafé®</li>
                        </ul>

                        <ul>
                            <li className="li-header">Community</li>
                            <li>Community</li>
                            <li>HACER® Scholarships for Hispanic Students</li>
                            <li>Ronald McDonald House Charities</li>
                            <li>McDonald’s Asian Pacific American</li>
                            <li>McDonald’s International</li>
                            <li>Black and Positively Golden</li>
                            <li>McDonald’s LGBTQ+</li>
                        </ul>

                        <ul>
                            <li className="li-header">Contact Us</li>
                            <li>Contact Us</li>
                            <li>Gift Card FAQs</li>
                            <li>Donations</li>
                            <li>Employment</li>
                            <li>Restaurant Feedback</li>
                            <li>Frequently Asked Questions</li>
                        </ul>
                    </Box>

                    <Box py={3} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex" }}>

                            <a href="">
                                <FacebookOutlinedIcon style={{ fontSize: "16px" }} />
                            </a>

                            <a href="">
                                <TwitterIcon style={{ fontSize: "16px" }} />
                            </a>

                            <a href="">
                                <YouTubeIcon style={{ fontSize: "16px" }} />
                            </a>

                            <a href="">
                                <InstagramIcon style={{ fontSize: "16px" }} />
                            </a>

                        </div>

                        <div>
                            <img src={AppStore} />
                            <img src={GooglePlay} />
                        </div>

                    </Box>
                    <Divider />


                    <Box py={3} my={5} sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                        <Box width="80%" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>Privacy (Updated)</li>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>California Privacy Notice</li>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>Terms & Conditions</li>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>Digital Accessibility</li>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>Do Not Sell My Personal Information</li>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>Cookie Settings</li>
                        </Box>

                        <Box style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                            <img src={Logo} width="35px" />
                            <Typography ml={10} width="60%" variant="p">© 2017 - 2022 McDonald's. All Rights Reserved</Typography>
                        </Box>
                    </Box>
                </Container>
            </footer>
        </>
    )
}