import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideTabContainer = styled.div`
  padding: 0;
  

  @media screen and (max-width: 830px) {
    padding: 0;
    margin: 0 auto;
    background: #000;
    position: absolute;
    bottom: 0px;
    position: fixed;
    z-index: 999;
    width: 100%;
  }
`;
export const TabA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
  background: #1a1e1f;
  border-radius: 32px;
  padding: 20px 10px;

  @media screen and (max-width: 830px) {
    flex-direction: row;
    padding: 20px 0;
    border-radius: 0px;
    background: #000;
    gap: 0;
    width: 100%;
    margin: auto 0;
  }
`;
export const OptionLink = styled(Link)`
  @media screen and (max-width: 830px) {
    margin: auto;
  }
`;
export const LinkIcon = styled.img`
  width: 30px;
  cursor: pointer;
  margin: auto ;
  filter: brightness(0) invert(1);
  cursor: pointer;

  @media screen and (max-width: 830px) {
    width: 30px;   
    height: 30px; 
  }

  &:hover {
    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg)
      brightness(104%) contrast(100%);
    outline: none;
  }
  &:focus {
    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg)
      brightness(104%) contrast(100%);
    outline: none;
  }
`;
export const TabB = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
  background: #1a1e1f;
  border-radius: 32px;
  padding: 20px 10px;
  margin: 20px 0 0 0;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;
