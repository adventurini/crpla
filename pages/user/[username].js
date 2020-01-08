import React from 'react';
import redirect from "../../utils/redirect";
import nextCookie from "next-cookies";
import Nav from '../../components/layout/Nav'
import UserProfileCard from '../../components/userProfile/UserProfileCard'

function profile() {
    return (
        <div>
          <Nav />  
          <UserProfileCard />
        </div>
    )
}

profile.getInitialProps = props => {
  return {user: props.query.username}
}

export default profile