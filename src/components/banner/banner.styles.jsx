import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 0;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 0 10px;
    margin: 100px 0 0 0;
  }
`;
export const ImageSrc = styled.img`
  width: 700px;
  height: 350px;

  @media screen and (max-width:1100px) {
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 830px) {
    width: 100%;
    height: 500px;
  }
`;
export const ImageSrc2 = styled.img`
  display: none;

  @media screen and (max-width: 800px) {
    width: 95%;
    display: block;
  }
`;