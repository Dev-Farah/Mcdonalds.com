import React from 'react'
import Navbar from "../components/Navbar";
import { Grid, Container, Typography } from '@mui/material';
import { ExclusiveDealsDiv, HeadingAndPara } from "../components/Div"
import img20 from "../images/img20.jpg";
import img21 from "../images/img21.jpg";
import img22 from "../images/img22.jpg";
import img23 from "../images/img23.jpg";
import img24 from "../images/img24.jpg";
import img25 from "../images/img25.jpg";
import img26 from "../images/img26.jpg";
import img27 from "../images/img27.jpg";
import img28 from "../images/img28.jpg";
import Footer from "../components/Footer";

export default function AboutOurFood() {
    return (
        <>
            <Navbar />
            
            <Container m={5}>
                <Typography mt={15} textAlign="center" fontWeight="bold" variant="h3">About Our Food</Typography>
                <img src={img20} />
            </Container>

            <Container sx={{ my: 10 }}>
                <HeadingAndPara variant="h4" fontWeight="bold" headingTxt="We’re Passionate About Our Food" pText="From adding more balanced options to our Happy Meal®, to serving up fresh beef Quarter Pounder® burgers that are cooked when you order, we’re always finding ways to show our commitment to our customers and our food." />
            </Container>

            <Grid container sx={{ my: 10, px: 3 }}>
                <ExclusiveDealsDiv src={img21} h4Text="Commitment to Quality" pText="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it." btnVal="Learn More" />
                <ExclusiveDealsDiv src={img22} h4Text="What's in Your Food" pText="Find out what makes our ingredients special." btnVal="Learn More" />
                <ExclusiveDealsDiv src={img23} h4Text="Our Food Philosophy" pText="We’re passionate about our food. That’s why we’re committed to always evolving what matters to you." btnVal="Learn More" />
                <ExclusiveDealsDiv src={img24} h4Text="Nutrition Calculator" pText="Our nutrition calculator has the McDonald’s menu nutrition information you’re seeking. Learn more about your favorite meals." btnVal="Learn More" />
                <ExclusiveDealsDiv src={img25} h4Text="Our Food Experts" pText="From our chefs, to our dieticians and suppliers, McDonald’s food experts care deeply about the food you eat." btnVal="Learn More" />
                <ExclusiveDealsDiv src={img26} h4Text="Fresh Beef" pText="Our Quarter Pounder®* patty is made with 100% fresh beef and cooked right when you order. It’s hot and deliciously juicy and full of flavor." smallText="*Weight before cooking 4 oz. At participating McDonald's. Fresh Beef available at most restaurants in contiguous US. Not available in Alaska, Hawaii, and US Territories." btnVal="Learn More" />
                <ExclusiveDealsDiv src={img27} h4Text="Happy Meal® Nutrition" pText="When your kids enjoy a meal that’s delicious and balanced, you’ll enjoy it too." btnVal="Learn More" />
                <ExclusiveDealsDiv src={img28} h4Text="Variety of Choices" pText="When it comes to quality options, we’ve got you covered." btnVal="Learn More" />
            </Grid>

            <Footer />
        </>
    )
}