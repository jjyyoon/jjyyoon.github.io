import React from "react";

import homepage from "./assets/homepage.svg";
import signUpPage from "./assets/sign-up-page.svg";
import collectionPage from "./assets/collection-page.svg";
import signIn from "./assets/sign-in.svg";
import cartPage from "./assets/cart-page.svg";
import checkoutPage from "./assets/checkout-page.svg";
import search from "./assets/search.svg";

export const eCommerce = {
  homepage: {
    img: <img src={homepage} className="d-block" alt="Homepage" />,
    heading: "Homepage",
    captions: [
      "This is an e-commerce website built with React and Express.js.",
      "To style this website, Semantic UI React is used."
    ]
  },
  signUpPage: {
    img: <img src={signUpPage} className="d-block" alt="Sign Up Page" />,
    heading: "Sign Up Page",
    captions: [
      "A database that manages data related to users and items is set up by using Sequelize and PostgreSQL.",
      "There is a sign in menu in the header."
    ]
  },
  collectionPage: {
    img: <img src={collectionPage} className="d-block" alt="Collection Page" />,
    heading: "Collection Page",
    captions: [
      "Customers can see items on each category page.",
      "If they find an item they like, they can add it to their cart.",
      "When they hover over an item, the image will be enlarged and ‘Add to Cart’ button will be showed."
    ]
  },
  signIn: {
    img: <img src={signIn} className="d-block" alt="Sign In" />,
    heading: "Sign In",
    captions: [
      "Passport.js is used for user authentication.",
      "To check if the password match with the password that is hashed and saved in database, bcrypt.js is used.",
      "Customers need to sign in first to add an item to their cart."
    ]
  },
  cartPage: {
    img: <img src={cartPage} className="d-block" alt="Cart Page" />,
    heading: "Cart Page",
    captions: [
      "In this page, customers are able to see which items are in their cart.",
      "They also can change the quantity of the items and remove the items.",
      "Only authenticated users can have access to this page."
    ]
  },
  checkoutPage: {
    img: <img src={checkoutPage} className="d-block" alt="Checkout Page" />,
    heading: "Checkout Page",
    captions: [
      "This website accepts a card payment and it is supported by Stripe.",
      "After the payment completes successfully, customers will see a message and be redirected to the homepage. At the same time, their cart will be empty."
    ]
  },
  search: {
    img: <img src={search} className="d-block" alt="Search" />,
    heading: "Search Items",
    captions: [
      "Customers can search items and check which category they need to check.",
      "If they click an item they want, the corresponding category page will be loaded."
    ]
  }
};
