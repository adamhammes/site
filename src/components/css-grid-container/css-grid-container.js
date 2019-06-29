import React, { useRef, useState } from "react";
import { Resizable } from "re-resizable";

const CssGridContainer = ({ path }) => {
  return (
    <div className="iframe-outer-container">
      <div className="iframe-padding-container">
        <div className="iframe-inner-container">
          <Resizable
            className="iframe-resize-container"
            resizeRatio={2}
            defaultSize={{ width: "100%", height: "100%" }}
            maxWidth="100%"
            minWidth={250}
            enable={{ top: false, right: true, bottom: false, left: true }}
          >
            <iframe src={path} />
          </Resizable>
        </div>
      </div>
    </div>
  );
};

export default CssGridContainer;
