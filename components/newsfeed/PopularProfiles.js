import React from "react";
import "./PopularProfiles.scss";
import SmallCardHeader from "../postCard/SmallCardHeader";
import { FiUser } from "react-icons/fi";
import UserAvatar from "../layout/UserAvatar";
import Button from "../layout/Button";

const profiles= [0,1,2,3]

export default function PopularProfiles() {
  return (
    <div className="popular-profiles">
      <SmallCardHeader
        title="Popular Profiles"
        icon={<FiUser style={{ width: "100%", height: "100%" }} />}
      />
      {profiles.map(profile=> 
      <div className="popular-profiles-content">
        <div className="popular-profiles-title">
          <div className="popular-profiles-user-avatar">
            <UserAvatar width="40px" height="40px"/>
          </div>

          <div className="popular-profiles-credentials">
            <p className="popular-profiles-user-name">Anthony Venturini</p>
            <p className="popular-profiles-profession">Realtor</p>
          </div>
          <div className="popular-profiles-follow-button">
            <button>Follow</button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
