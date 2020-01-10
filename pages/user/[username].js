import React from 'react';
import redirect from "../../utils/redirect";
import nextCookie from "next-cookies";
import UserProfileCard from '../../components/userProfile/UserProfileCard'
import UserProfileImages from '../../components/userProfile/UserProfileImages';
import NavAuth from '../../components/layout/NavAuth';

function profile() {
    return (
        <div style={{backgroundColor: "#F2F3F7"}}>
          <NavAuth />
          <div style={{display: "flex", flexDirection: "row-reverse"}}>
          <UserProfileCard />
          <UserProfileImages/>
          </div>
        </div>
    )
}

profile.getInitialProps = props => {
  return {user: props.query.username}
}

export default profile