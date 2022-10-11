import React from 'react'
import { HomePgDiv } from "../components/Div"
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'

export default function Home() {
    return (
        <>
            <HomePgDiv src={img1} h4Text="The Cactus Plant Flea Market Box" pText="Cactus Plant Flea Market is in the house with a limited-edition box design and collectibles. Your faves like Big Mac® and 10 piece Chicken McNuggets® with a side of art? Yes please ::) Order in the app, 10/3-10/30." smallText="*At participating McDonald's for a limited time. While supplies last. Mobile order & pay at participating McDonald’s. Download and registration required." btnVal="Order in the App" />
            <HomePgDiv src={img2} h4Text="Free Fries Now. Free McDonald’s Later.*" pText="Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase." smallText="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required." btnVal="Download the App" />
            <HomePgDiv src={img3} h4Text="Lead The Change" pText="To all those feeding and fostering community by embracing your passion, apply for a chance to be a McDonald’s® Black & Positively Golden® Change Leader and ignite your story. Whether you are an activist, financial guru, artist or creator, McDonald’s is empowering those who are leading change." btnVal="Apply Now to be a Change Leader" />
            <HomePgDiv src={img4} h4Text="Your Story Deserves a Hollywood Ending" pText="Latinos have stories to tell, yet they make up less than 1% of the ones told in Hollywood. As a champion of the Hispanic community McDonald’s wants to help change that. <strong>With Spotlight Dorado</strong>, McDonald’s is giving aspiring Latino filmmakers a chance to participate in a short film competition. Aspiring filmmakers will bring their vision to life having their story produced into a short film with invaluable mentorship from renowned industry leaders and a chance to showcase their film in film festivals around the country." btnVal="Learn More About Spotlight Dorado" />
            <HomePgDiv src={img5} h4Text="Order McDelivery® Now*" pText="Get all your McDonald’s favorites delivered right to your doorstep with McDelivery® on Uber Eats, DoorDash or Grubhub." smallText="*At participating McDonald’s. Prices may be higher than at restaurants. Delivery/service fees apply" btnVal="Order McDelivery Now" />
            <HomePgDiv src={img6} h4Text="Deals for Days" pText="Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup." smallText="*Mobile Order & Pay at participating McDonald’s." btnVal="Get App Deals" />
            {/* <HomePgDiv src={img} h4Text="" pText="" smallText="" btnVal="" /> */}
        </>
    )
}