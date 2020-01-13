import gql from "graphql-tag";

/* Fetches any user profile by username */
export const FETCH_PROFILE = gql`
  query profile($username: String!) {
    profile(username: $username) {
      firstName
      lastName
      username
      profilePicture
      followerCount
      followingCount
      posts {
	    id
        media {
          url
        }
        description
      }
	  postCount
    }
  }
`;
