import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import FeaturedHouses from "../components/landingPage/FeaturedHouses";
import FeaturedPhotographers from "../components/landingPage/FeaturedPhotographers";
import "../styles/base.scss";

const Home = () => (
  <div>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#0e1977"
      ></link>
      <meta name="msapplication-TileColor" content="#0e1977"></meta>
      <meta name="theme-color" content="#0e1977"></meta>
    </Head>
    <Nav />
    <Header />
    <FeaturedHouses />
    <FeaturedPhotographers />
  </div>
);

export default Home;
