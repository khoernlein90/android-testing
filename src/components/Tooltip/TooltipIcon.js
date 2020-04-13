import React from "react";
import styled from "styled-components";

export const TooltipIcon = () => (
  <SVG focusable="false" aria-hidden="true" tabindex="-1" viewBox="0 0 24 24">
    <g>
      <path
        stroke="none"
        fill="#000000"
        d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM12,3.43A8.57,8.57,0,1,0,20.57,12,8.59,8.59,0,0,0,12,3.43Zm1.2,7.4H10.8v7.89h2.4Zm0-4.78H10.8V8.16h2.4Z"
      ></path>
    </g>
  </SVG>
);

const SVG = styled.svg`
  background-color: transparent;
  display: inline-block;
  height: 1rem;
  width: 1rem;
  min-height: 1rem;
  min-width: 1rem;
  outline: none;
  pointer-events: none;
`;
