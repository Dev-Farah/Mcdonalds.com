import React from 'react'
import Navbar from "../components/Navbar";
import { MainHeading, HomePgDiv, ExclusiveDealsDiv } from "../components/Div"
import { Grid } from '@mui/material';
import img2 from "../images/img2.jpg";
import img16 from "../images/img16.jpg";
import img17 from "../images/img17.png";
import img18 from "../images/img18.jpg";
import img19 from "../images/img19.jpg";
import Footer from "../components/Footer";

export default function ExclusiveDeals() {
    return (
        <>
            <Navbar />
            
            <MainHeading text="Exclusive McDonald's Deals" />
            <HomePgDiv src={img2} h4Text="Free Fries Now. Free McDonald’s Later.*" pText="Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase." smallText="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required." btnVal="Download the App" />

            <Grid container sx={{ my: 12, px: 3 }}>
                <ExclusiveDealsDiv src={img16} h4Text="$1 Large Fries*" pText="Your good deed of the day: sharing your Fries (it's easier when they're just $1)." smallText="*Offer valid thru 12/31/22 at participating McDonald’s. Valid 1x/week. Refer to McD app for details. Mobile Order & Pay at Participating McDonald’s. McD app download and registration required." btnVal="Order in the App" />
                <ExclusiveDealsDiv src={img17} h4Text="$0.99 for Any Size Coffee*" pText="That’s 99 reasons to go for Premium Roast or Iced Coffee at any time, only in the app." smallText="*Offer valid  thru 12/31/22 at participating McDonald’s. Valid 1x/day. Refer to McD app for details. Mobile Order & Pay at Participating McDonald’s. McD app download and registration required." btnVal="Get Deal in the App" />
                <ExclusiveDealsDiv src={img18} h4Text="Free Fries Friday" pText="Enjoy free medium Fries with any $1 minimum Mobile Order & Pay purchase, only in the app.* After all—without free Fries, Fridays are just another day." smallText="*Valid 1x each Friday thru 12/31/22 with minimum purchase of $1 (excluding tax). McDonald’s app download and registration required. Mobile Order & Pay at participating McDonald’s." btnVal="Use the App to Order" />
            </Grid>

            <HomePgDiv src={img19} h4Text="Get Your Free Fries* with Contactless Mobile Ordering and Curbside Pickup" pText="Get free medium Fries every Friday, exclusively with Mobile Order & Pay with any minimum $1 purchase.*" smallText="*Offer valid 1x each Friday thru 12/31/22 with minimum purchase of $1 (excluding tax). McD app download and registration required. Offer only available through Mobile Order & Pay. Mobile Order & Pay at participating McDonald's. ©2022 McDonald's" btnVal="Use the App to Order" />

            <Footer />
        </>
    )
}