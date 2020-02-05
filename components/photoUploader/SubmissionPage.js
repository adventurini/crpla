import React, {useState, useEffect} from "react";
import CurpelaWordLogo from "../icons/CurpelaWordLogo";
import "./SubmissionPage.scss";
import { GoPlus } from "react-icons/go";
import Button from "../layout/Button";
import ListingPost from "./ListingPost";
import { Line } from 'rc-progress';


export default function SubmissionPage() {
    const [progress, setProgress] = useState(-2);

useEffect(() => {
  const interval = setInterval(() => setProgress(progress + .35), 100);
  return () => {
    clearInterval(interval);
  };
}, [progress]);

  return (
    <div className="submission-page">
      <div className="submission-page-container">
        <div className="submission-page-content-container">
          <div className="submission-page-logo">
            <CurpelaWordLogo fill="#483bda" width="130" />
          </div>

          <p className="submission-page-explainer">
            Please wait while we generate your listing page and delivery items.
            Listings can be edited any time. Your listing will be here on
            completion:
          </p>
          {progress < 105 ?
          <div className="submission-page-progress-bar">
          <Line percent={progress > 2 ? progress : 3} strokeWidth="2" strokeColor={progress < 100 ? `rgb(255, 156, 64)` : 'rgb(66, 43, 216)'} />
          </div>
          :
          <div className="submission-page-listing-button">
          <Button 
          margin="16px auto"
          text="New Listing"
          >
          </Button>
          </div>
}
          {/* <p className="submission-page-listing-URL">http://www.curpela.com/house/THIS_HOUSE_ADDRESS</p> */}
          <p className="submission-page-invite">
            If you would like to invite a realtor or 3rd party, please add their
            e-mail below.
          </p>
          <form className="submission-page-invite-form">
            <input
              placeholder="Add a realtor or another third party..."
              className="submission-page-invite-input"
            ></input>

            <div className="submission-page-invite-button">
              <Button
                text={<GoPlus style={{ width: "22px", height: "22px" }} />}
                padding="9px 9px"
                width="43px"
                height="40.5px"
                minWidth="30px"
                borderTopLeftRadius="0px"
                borderBottomLeftRadius="0px"
              ></Button>
            </div>
          </form>
          <p
            className="submission-page-invite"
            style={{
              fontSize: "1.1rem",
              marginTop: "-35px",
              fontWeight: "200"
            }}
          >
            ***They will receive editing permission -- admin rights can be
            edited at any time.
          </p>
          <p className="submission-page-post-explainer">
                  Optionally, add a post below to share with your followers.
                </p>
                <ListingPost />
        </div>
      </div>
    </div>
  );
}
