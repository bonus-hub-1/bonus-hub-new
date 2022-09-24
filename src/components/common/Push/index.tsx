import React from "react";

type PushProps = {
  size?: number;
  orientation?: "horizontal" | "vertical";
};

const Push: React.FC<PushProps> = (props) => {
  return (
    <div
      style={{
        paddingTop: props.orientation === "vertical" ? `${props.size}px` : "",
        paddingRight:
          props.orientation === "horizontal" ? `${props.size}px` : "",
      }}></div>
  );
};

export {Push};
