// @flow
import styled from "styled-components";

export const ImageContiner = styled.span`
  display: flex;
  margin-left: ${props => 3 * (props.indent || 0)}em;
  justify-content: ${props => {
    if (props.align === "center") return "center";
    else if (props.align === "right") return "flex-end";
    return "flex-start";
  }};
`;

export const ImageNodeShared = styled.span`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  display: inline-block;
  position: relative;
  margin: 10px;

  img,
  iframe {
    position: absolute;
    border: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: 'none';
  }
`;

export const ImageNodeInActive = ImageNodeShared.extend`
  border: 2px solid #fff;
`;

export const ImageNodeActive = ImageNodeShared.extend`
  border: 2px solid #ef6942;
`;

export const Toolbar = styled.span`
  z-index: 1000;
  display: block;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 100;
`;

export const ToolbarItem = styled.span`
  display: inline-block;
  color: #fff;
  padding: 3px;
  margin: 3px;
  background-image: linear-gradient(180deg, #464646, #151515);
  font-size: 16px;
  border-radius: 5px;
`;
