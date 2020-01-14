import React from "react";
import UserProfileCard from "../../components/userProfile/UserProfileCard";
import UserProfileImages from "../../components/userProfile/UserProfileImages";
import NavAuth from "../../components/layout/NavAuth";
import ReactLoadingSpinner from '../../components/icons/ReactLoadingSpinner'


import { useQuery } from "@apollo/react-hooks";
import { FETCH_PROFILE } from "../../graphql/User/queries/profile";

function profile({ user }) {
  const { data, loading, error } = useQuery(FETCH_PROFILE, {
    variables: {
      username: user
    }
  });

  if (loading) return    <ReactLoadingSpinner />;

  return (
    <div style={{ backgroundColor: "#F2F3F7" }}>
      <NavAuth />

      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <UserProfileCard
          profile={{
            firstName: data.profile.firstName,
            lastName: data.profile.lastName,
            username: data.profile.username,
            profilePicture: data.profile.profilePicture,
            followerCount: data.profile.followerCount,
            followingCount: data.profile.followingCount,
			    postCount: data.profile.postCount
          }}
        />
        <UserProfileImages posts={data.profile.posts} />
      </div>
    </div>
  );
}

profile.getInitialProps = props => {
  return { user: props.query.username };
};

export default profile;
