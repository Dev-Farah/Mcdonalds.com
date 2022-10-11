import React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import { HomePgDiv, ExclusiveDealsDiv, RewardsDiv, HeadingAndPara } from "../components/Div"
import img2 from '../images/img2.jpg'
import img7 from '../images/img7.png'
import img8 from '../images/img8.jpg'
import img12 from '../images/img12.png'
import img13 from '../images/img13.png'
import img14 from '../images/img14.png'
import img15 from '../images/img15.jpg'

export default function MyMcDonaldsRewards() {
    return (
        <>
            <Container m={10}>
                <Typography my={4} mt={13} textAlign="center" fontWeight="bold" variant="h3">MyMcDonald’s Rewards</Typography>

                <Typography variant='p'>With the McDonald’s app, you can earn points on every order to redeem for free McDonald's. Plus, get access to exclusive daily deals, easily re-order faves and select convenient pickup options with Mobile Order & Pay.</Typography>
            </Container>

            <HomePgDiv src={img2} h4Text="Free Fries Now. Free McDonald’s Later.*" pText="Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase." smallText="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required." btnVal="Download the App" />

            <Grid container sx={{ my: 12, px: 3 }}>

                <ExclusiveDealsDiv src={img7} h4Text="Free McDonald’s After Your First Order*" pText="Join MyMcDonald's Rewards in the app today and unlock a free Hash Browns, Vanilla Cone, McChicken® or Cheeseburger after your first order." smallText="*Valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald's. Refer to MyMcDonald’s Program Terms for details. Excludes delivery. McD app download and registration required." btnVal="Download the App" />
                <ExclusiveDealsDiv src={img8} h4Text="Earn an Extra 1500 Points" pText="Link your credit or debit card to the McDonald's app and pick up your faves fast when you pay in the app. Plus, earn 1500 Bonus Points on your first payment using your linked card." smallText="*Valid 1x thru 12/31/22 at participating McDonald's. This offer is intended only for use by the recipient of the offer and this MyMcDonald's Rewards account. Bonus points may take up to 10 days to appear in your account. Rewards program available only at participating McDonald's. Excludes delivery. McDonald's app download and registration required." btnVal="Link Payment Now in the App" />

                <Container>

                </Container>
                <RewardsDiv src={img12} h4Text="1500 Points" pText="Choose your McDonald's item, whether you’re craving a McChicken® (Regular or Hot ‘N Spicy), Hash Browns, Vanilla Cone or our classic Cheeseburger." />
                <RewardsDiv src={img13} h4Text="3000 Points" pText="Step up and take your pick between medium Fries, Sausage Burrito , 6 piece Chicken McNuggets®  or a large Iced Coffee." />
                <RewardsDiv src={img14} h4Text="4500 Points" pText="We’re going large with your choice of large Fries, large Frappé, Filet-O-Fish® or Sausage McMuffin® with Egg. " />
                <RewardsDiv src={img15} h4Text="6000 Points" pText="Save up your points and you could get a Big Mac®, Quarter Pounder®* with Cheese, Happy Meal® or Bacon, Egg & Cheese Biscuit!" smallText="* Weight before cooking 4 oz" />
            </Grid>

            <Container sx={{ mb: 20 }}>
                <Typography variant='h4' fontWeight="bold">Frequently Asked Questions</Typography>
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="What Do I Have to Do to Earn Points?" pText="Earning rewards points is very easy, simply download our app and agree to participate in MyMcDonald’s Rewards. Present the 4-digit code before ordering, or get points automatically when you order in the app.*" />
                <br />
                <Typography variant='caption'>*Excludes delivery</Typography>
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="How Much Are Points Worth?" pText="For every dollar you spend on eligible products, you will receive 100 points. You can start redeeming your MyMcDonald’s Rewards when you have 1500 points." />
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="Do My Points Expire?" pText="Unfortunately, nothing can last forever. Your points will expire on the first day of the month after the sixth month from the day your points were earned. Plenty of time to save up for your favorite!" />
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="Can I Get More Than One Reward at a Time?" pText="At this time, you are limited to redeeming one reward per order." />
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="Can I Share My Points?" pText="Your MyMcDonald's Rewards points are yours alone. Once you have your food, it’s up to you whether you want to share!" />
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="How Do I Redeem Points for Free McDonald’s?" pText="You can redeem with contactless mobile ordering in the McDonald's app by selecting Rewards, choosing the favorite you want to redeem and choosing “Add to Mobile Order”. To redeem in store or Drive Thru, select rewards and choose the item you want to redeem, then choose “Use at Restaurant” to get the 4-digit code you can provide the crew before you start ordering. At this time, you cannot redeem a reward in a delivery order." />
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="Can I Redeem a Reward And Earn Points in the Same Order?" pText="Yes! You earn points on every eligible purchase, so if you’re redeeming a reward and ordering more food in addition to that, you will still earn 100 points for every dollar you spend." />
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="What If I Forgot to Provide My Code?" pText="If you’re enjoying your order and suddenly realized you never provided your code, no worries! Take these steps to contact us in the app:" />
                <ol style={{margin: "20px"}}>
                    <li>Select More</li>
                    <li>Choose "Careers, Contact & Legal"</li>
                    <li>Select "Contact Us"</li>
                    <li>Enter your comments regarding your order, including your order number, subtotal, and if there’s any reason you think you might be missing points (example: forgot to scan)</li>
                </ol>
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="Do I have to Provide Two Codes If I Want to Redeem a Reward or Deal and Earn Points in the Same Transaction?" pText="No, you only need to provide one code. When redeeming, provide the 4-digit reward code (found on the Rewards tab)—this will help you redeem your free item while also earning points for products you are purchasing. The same is true for a deal, use the 4-digit deal code to save and you will automatically earn points for products you purchase in that transaction." />
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="Are There Any Purchases That Don’t Qualify For Points?" pText="Qualifying purchases where an active reward, mobile offer or promotional offer is redeemed will earn points, but you will only earn points for U.S. dollars actually spent in the transaction. When a McDonald’s Arch card is used to make a qualifying purchase, you will earn points. The following are not considered qualifying purchases and will not earn any points:" />
                <ol style={{margin: "20px"}}>
                    <li>taxes, bags and bottle fees, other surcharges or fees</li>
                    <li>loading any money on a McDonald’s Arch Card® (gift card)</li>
                    <li>delivery orders</li>
                </ol>
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="How do I link my card for payment in the app?" pText="Linking you card for more convenient payment in the app is easy: Simply," />
                <ol style={{margin: "20px"}}>
                    <li>Go to ‘Earn Points’ in the McDonald’s app</li>
                    <li>Select “Pay with Linked Card” at the top</li>
                    <li>Insert your card information and hit save</li>
                </ol>
                <HeadingAndPara pText="If you want to edit or replace:" />
                <ol style={{margin: "20px"}}>
                    <li>Select ‘More’ at the bottom right</li>
                    <li>Go to “Profile”</li>
                    <li>Select “Payment Methods”</li>
                </ol>
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="I Lost My Phone! Did I Lose My Points?" pText="We’re sorry about your phone! Contact your service provider and once you have a new phone your MyMcDonald’s Rewards should still be waiting for you when you log in to our app." />
                <br />
                <br />
                <HeadingAndPara variant="h4" fontWeight="normal" headingTxt="Where Are the Terms and Conditions?" pText="You can access MyMcDonald's Rewards Terms and Conditions by visiting the MyMcDonald’s Rewards Terms and Conditions section." />
            </Container>
        </>
    )
}