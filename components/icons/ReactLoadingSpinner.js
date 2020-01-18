import React from "react";
import Loader from "react-loader-spinner";

export default function ReactLoadingSpinner() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <Loader
        type="Circles"
        color="rgb(66, 43, 216)"
        height={100}
        width={100}
      />
    </div>
  );
}
