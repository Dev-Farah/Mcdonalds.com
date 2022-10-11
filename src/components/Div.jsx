import React from "react";
import { Grid, Container, Box, Typography, Button } from '@mui/material';

export function MainHeading(props) {
    let { text } = props;
    return (
        <>
            <Typography m={14} textAlign="center" fontWeight="bold" variant="h3">{text}</Typography>
        </>
    )
};

export function HeadingAndPara(props) {
    let { variant, fontWeight, headingTxt, pText } = props;

    return (
        <>
                <Typography fontWeight={fontWeight} variant={variant}>{headingTxt}</Typography>
                <br />
                <Typography variant="p">{pText}</Typography>
        </>
    )

}

export function HomePgDiv(props) {
    let { src, h4Text, pText, smallText, btnVal } = props;
    return (
        <>
            <Container sx={{ display: "flex", my: 12 }}>
                <img src={src} width="65%" height="65%" />

                <Box ml={3} my={1}>
                    <Typography fontWeight="bold" variant="h4">{h4Text}</Typography>
                    <br />
                    <Typography variant="p">{pText}</Typography>
                    <br />
                    <br />
                    <Typography variant="caption" fontSize={"10px"}>{smallText}</Typography>
                    <br />
                    <br />
                    <Button className="button" variant="contained">{btnVal}</Button>

                </Box>
            </Container>
        </>
    )
};


export function ExclusiveDealsDiv(props) {
    let { src, h4Text, pText, smallText, btnVal } = props;
    return (
        <>
            <Grid item sm={12} md={5} lg={5} mx="auto">
                <Container sx={{ my: 8 }}>
                    <img src={src} width="100%" height="100%" />

                    <Box my={1}>
                        <Typography fontWeight="bold" variant="h4">{h4Text}</Typography>
                        <br />
                        <Typography variant="p">{pText}</Typography>
                        <br />
                        <br />
                        <Typography variant="caption" fontSize={"10px"}>{smallText}</Typography>
                        <br />
                        <br />
                        <Button className="button" variant="contained">{btnVal}</Button>

                    </Box>
                </Container>
            </Grid>
        </>
    )
};

export function RewardsDiv(props) {
    let { src, h4Text, pText, smallText } = props;
    return (
        <>
            <Grid item sm={12} md={5} lg={5} mx="auto">
                <Container sx={{ my: 8 }}>
                    <img src={src} width="100%" height="100%" />

                    <Box my={1}>
                        <Typography fontWeight="bold" variant="h4">{h4Text}</Typography>
                        <br />
                        <Typography variant="p">{pText}</Typography>
                        <br />
                        <br />
                        <Typography variant="caption" fontSize={"10px"}>{smallText}</Typography>

                    </Box>
                </Container>
            </Grid>
        </>
    )
};