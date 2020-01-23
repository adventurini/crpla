import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../config/apollo.config";
import "../components/authentication/Login.scss";
import "../components/authentication/Register.scss";
import "../components/houseProfile/HouseImages.scss";
import "../components/houseProfile/HousePosts.scss";
import "../components/houseProfile/HouseHeader.scss";
import "../components/houseProfile/HouseSideBar.scss";
import "../components/userProfile/UserProfilePosts.scss";
import "../components/userProfile/UserProfileCard.scss";
import "../components/userProfile/UserProfileImages.scss";
import "../components/layout/Nav.scss";
import "../components/layout/Header.scss";
import "../components/postCard/PostCard.scss";
import "../components/newsfeed/NewsFeedImages.scss";
import "../components/newsfeed/NewsFeedPosts.scss";
import "../components/newsfeed/NewsFeedSidebarLeft.scss";
import "../components/newsfeed/NewsFeedSidebarRight.scss";
import "../components/layout/UserAvatar.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withApollo(MyApp);
