import React from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';

let menuData = [
    {
        title: "Spicy Crispy Chicken Sandwich",
        category: "featured favorites",
        image: require("../images/menu/Spicy-Crispy-Chicken-Sandwich.jpg"),
    },
    {
        title: "Big Mac®",
        category: "featured favorites",
        image: require("../images/menu/Big-Mac.jpg"),
    },
    {
        title: "Chicken McNuggets®",
        category: "featured favorites",
        image: require("../images/menu/Chicken-Mc-Nuggets.jpg"),
    },
    {
        title: "World Famous Fries®",
        category: "featured favorites",
        image: require("../images/menu/World-Famous-Fries.jpg"),
    },
    {
        title: "Quarter Pounder®* with Cheese",
        category: "featured favorites",
        image: require("../images/menu/Quarter-Pounder-with-Cheese.jpg"),
    },
    {
        title: "Iced Coffee",
        category: "featured favorites",
        image: require("../images/menu/Iced-Coffee.jpg"),
    },
    {
        title: "Egg McMuffin",
        category: "featured favorites",
        image: require("../images/menu/Egg-Mc-Muffin.jpg"),
    },
    {
        title: "Sausage Burrito",
        category: "featured favorites",
        image: require("../images/menu/Sausage-burrito.jpg"),
    },
    {
        title: "Bacon, Egg & Cheese Biscuit",
        category: "breakfast",
        image: require("../images/menu/Bacon-Egg-Cheese-Biscuit.jpg"),
    },
    {
        title: "Egg McMuffin",
        category: "breakfast",
        image: require("../images/menu/Egg-Mc-Muffin.jpg"),
    },
    {
        title: "Sausage McMuffin®",
        category: "breakfast",
        image: require("../images/menu/Sausage-McMuffin.jpg"),
    },
    {
        title: "Sausage McMuffin® with Egg",
        category: "breakfast",
        image: require("../images/menu/Sausage-McMuffin-with-Egg.jpg"),
    },
    {
        title: "Sausage Biscuit",
        category: "breakfast",
        image: require("../images/menu/Sausage-Biscuit.jpg"),
    },
    {
        title: "Sausage Biscuit with Egg",
        category: "breakfast",
        image: require("../images/menu/Sausage-Biscuit-with-Egg.jpg"),
    },
    {
        title: "Bacon, Egg & Cheese McGriddles®",
        category: "breakfast",
        image: require("../images/menu/Bacon-Egg-Cheese-McGriddles.jpg"),
    },
    {
        title: "Sausage McGriddles®",
        category: "breakfast",
        image: require("../images/menu/Sausage-McGriddles.jpg"),
    },
    {
        title: "Sausage, Egg & Cheese McGriddles®",
        category: "breakfast",
        image: require("../images/menu/Sausage-Egg-Cheese-McGriddles.jpg"),
    },
    {
        title: "Big Breakfast®",
        category: "breakfast",
        image: require("../images/menu/Big-Breakfast.jpg"),
    },
    {
        title: "Big Breakfast® with Hotcakes",
        category: "breakfast",
        image: require("../images/menu/Big-Breakfast-with-Hotcakes.jpg"),
    },
    {
        title: "Hotcakes",
        category: "breakfast",
        image: require("../images/menu/Hotcakes.jpg"),
    },
    {
        title: "Hotcakes and Sausage",
        category: "breakfast",
        image: require("../images/menu/Hotcakes-and-Sausage.jpg"),
    },
    {
        title: "Sausage Burrito",
        category: "breakfast",
        image: require("../images/menu/Sausage-burrito.jpg"),
    },
    {
        title: "Hash Browns",
        category: "breakfast",
        image: require("../images/menu/Hash-Browns.jpg"),
    },
    {
        title: "Fruit & Maple Oatmeal",
        category: "breakfast",
        image: require("../images/menu/Fruit-Maple-Oatmeal.jpg"),
    },
    {
        title: "Egg McMuffin® Meal",
        category: "breakfast",
        image: require("../images/menu/Egg-McMuffin-Meal.jpg"),
    },
    {
        title: "Sausage McMuffin® with Egg Meal",
        category: "breakfast",
        image: require("../images/menu/Sausage-McMuffin-with-Egg-Meal.jpg"),
    },
    {
        title: "Sausage Biscuit with Egg Meal",
        category: "breakfast",
        image: require("../images/menu/Sausage-Biscuit-with-Egg-Meal.jpg"),
    },
    {
        title: "Bacon, Egg & Cheese Biscuit Meal",
        category: "breakfast",
        image: require("../images/menu/Bacon-Egg-Cheese-Biscuit-Meal.jpg"),
    },
    {
        title: "Bacon, Egg & Cheese McGriddles® Meal",
        category: "breakfast",
        image: require("../images/menu/Bacon-Egg-Cheese-McGriddles-Meal.jpg"),
    },
    {
        title: "Sausage, Egg & Cheese McGriddles® Meal",
        category: "breakfast",
        image: require("../images/menu/Sausage-Egg-Cheese-McGriddles-Meal.jpg"),
    },
    {
        title: "Sausage McGriddles® Meal",
        category: "breakfast",
        image: require("../images/menu/Sausage-McGriddles-Meal.jpg"),
    },
    {
        title: "Sausage Burrito Meal",
        category: "breakfast",
        image: require("../images/menu/Sausage-Burrito-2-Meal.jpg"),
    },
    {
        title: "Big Mac®",
        category: "burgers",
        image: require("../images/menu/Big-Mac.jpg"),
    },
    {
        title: "Quarter Pounder®* with Cheese",
        category: "burgers",
        image: require("../images/menu/Quarter-Pounder-with-Cheese.jpg"),
    },
    {
        title: "Double Quarter Pounder®* with Cheese",
        category: "burgers",
        image: require("../images/menu/Double-Quarter-Pounder-with-Cheese.jpg"),
    },
    {
        title: "Quarter Pounder®* with Cheese Deluxe",
        category: "burgers",
        image: require("../images/menu/qpc-deluxe-burger.jpg"),
    },
    {
        title: "Mc Double®",
        category: "burgers",
        image: require("../images/menu/McDouble.jpg"),
    },
    {
        title: "Quarter Pounder®* with Cheese Bacon",
        category: "burgers",
        image: require("../images/menu/qpc-bacon-burger.jpg"),
    },
    {
        title: "Cheeseburger",
        category: "burgers",
        image: require("../images/menu/Cheeseburger.jpg"),
    },
    {
        title: "Double Cheeseburger",
        category: "burgers",
        image: require("../images/menu/Double-Cheeseburger.jpg"),
    },
    {
        title: "Hamburger: The Classic McDonald's Burger",
        category: "burgers",
        image: require("../images/menu/Hamburger.jpg"),
    },
    {
        title: "Crispy Chicken Sandwich",
        category: "chicken and fish sandwiches",
        image: require("../images/menu/crispy-chicken-sandwich.jpg"),
    },
    {
        title: "Deluxe Crispy Chicken Sandwich",
        category: "chicken and fish sandwiches",
        image: require("../images/menu/deluxe-crispy-chicken-sandwich.jpg"),
    },
    {
        title: "Spicy Crispy Chicken Sandwich",
        category: "chicken and fish sandwiches",
        image: require("../images/menu/Spicy-Crispy-Chicken-Sandwich.jpg"),
    },
    {
        title: "Filet O Fish®",
        category: "chicken and fish sandwiches",
        image: require("../images/menu/Filet-O-Fish.jpg"),
    },
    {
        title: "McChicken®",
        category: "chicken and fish sandwiches",
        image: require("../images/menu/McChicken.jpg"),
    },
    {
        title: "Chicken McNuggets®",
        category: "mc nuggets and meals",
        image: require("../images/menu/Chicken-McNuggets.jpg"),
    },
    {
        title: "10 Piece Chicken McNuggets®",
        category: "mc nuggets and meals",
        image: require("../images/menu/Chicken-McNuggets-10pc.jpg"),
    },

];

export default menuData;