import React, { Component } from "react";
import styled from "styled-components";
import uuid from "uuid/v4";

import { TooltipIcon } from "./TooltipIcon";

class Tooltip extends Component {
  state = {
    buttonId: uuid(),
    contentId: uuid(),
    isAndroid: false
  };

  componentDidMount() {
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf("android") > -1;

    if (isAndroid) {
      this.setState({ isAndroid: true });
    }
  }

  showTooltip = () => {
    const tooltipButton = document.getElementById(this.state.buttonId);
    const tooltipContent = document.getElementById(this.state.contentId);
    const { isAndroid } = this.state;

    if (!isAndroid) {
      if (tooltipButton && tooltipContent) {
        tooltipContent.style.visibility = "visible";
        tooltipContent.setAttribute("aria-hidden", "false");
        tooltipButton.setAttribute("aria-expanded", "true");
      }
    }
  };

  hideTooltip = () => {
    const tooltipButton = document.getElementById(this.state.buttonId);
    const tooltipContent = document.getElementById(this.state.contentId);
    const { isAndroid } = this.state;

    if (!isAndroid) {
      if (tooltipButton && tooltipContent) {
        tooltipContent.style.visibility = "hidden";
        tooltipContent.setAttribute("aria-hidden", "true");
        tooltipButton.setAttribute("aria-expanded", "false");
      }
    }
  };

  tooltipClick = () => {
    const tooltipButton = document.getElementById(this.state.buttonId);
    const tooltipContent = document.getElementById(this.state.contentId);

    if (tooltipButton && tooltipContent) {
      if (tooltipButton.getAttribute("aria-expanded") === "true") {
        tooltipContent.style.visibility = "hidden";
        tooltipContent.setAttribute("aria-hidden", "true");
        tooltipButton.setAttribute("aria-expanded", "false");
      } else {
        tooltipContent.style.visibility = "visible";
        tooltipContent.setAttribute("aria-hidden", "false");
        tooltipButton.setAttribute("aria-expanded", "true");
      }
    }
  };

  tooltipEscape = e => {
    const tooltipButton = document.getElementById(this.state.buttonId);
    const tooltipContent = document.getElementById(this.state.contentId);

    if (tooltipButton && tooltipContent) {
      if (e.keyCode === 27) {
        tooltipContent.style.visibility = "hidden";
        tooltipContent.setAttribute("aria-hidden", "true");
        tooltipButton.setAttribute("aria-expanded", "false");
      }
    }
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <Button
          id={this.state.buttonId}
          aria-label="more information tooltip"
          aria-describedby={this.state.contentId}
          aria-expanded="false"
          onClick={this.tooltipClick}
          onMouseOver={this.showTooltip}
          onMouseOut={this.hideTooltip}
          onFocus={this.showTooltip}
          onBlur={this.hideTooltip}
          onKeyDown={this.tooltipEscape}
        >
          <TooltipIcon />
        </Button>
        <Content id={this.state.contentId} aria-hidden="true" role="tooltip">
          {this.props.children}
        </Content>
      </div>
    );
  }
}

export default Tooltip;

const Button = styled.button`
  padding: 0;
  border: 0;
  background: 0;
  font-size: 0;
  cursor: pointer;
`;

const Content = styled.span`
  visibility: hidden;
  position: absolute;
  bottom: 24px;
  left: -104px;
  width: 200px;
  background: #fff;
  border: 1px solid;
  padding: 12px;
  font-size: 12px;
  font-family: NeueHaasGroteskDisplay;
  line-height: 14px;

  ::before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    border-right: 0.0625rem solid #000000;
    border-bottom: 0.0625rem solid #000000;
    width: 0.53125rem;
    height: 0.53125rem;
    bottom: -5px;
    background: white;
    left: calc(50% - 0px);
    transform: translate(-50%) rotate(45deg);
    will-change: transform, left;
    z-index: 0;
  }
`;
