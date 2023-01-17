import styled, { css } from "styled-components";
import One from "../../assets/images/1.png";
import Two from "../../assets/images/2.png";
import Three from "../../assets/images/3.png";
import Four from "../../assets/images/4.png";
import Five from "../../assets/images/5.png";
import Six from "../../assets/images/6.png";
import Seven from "../../assets/images/7.png";

const CardStyles = css`
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  width: 213px;
  height: 234px;
  color: #fff;
  margin: 0 0 30px 0;

  @media screen and (max-width: 830px) {
    width: 170px;
    height: 170px;
  }
`;

export const MusicListLibraryContainer = styled.div`
  padding: 0;
  width: 100%;
  font-family: quicksand;
  text-transform: capitalize;

  @media screen and (max-width: 830px) {
    padding: 0 0 150px 25px;
    width: auto !important;
  }
  @media screen and (max-width: 400px) {
    padding: 0 0 150px 10px;
    width: auto !important;
  }
`;
export const Head = styled.h1`
  font-size: 24px;
  letter-spacing: 2px;
  margin: 5px 0 24px 0;
  color: #efeee0;
  text-align: left;
`;
export const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;

  @media screen and (max-width: 830px) {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    width: 100%;
    margin: 80px 0 0 0;
  }
`;
export const Card = styled.div`
  background: url(${One});
  ${CardStyles}
`;
export const Card2 = styled.div`
  background: url(${Two});
  ${CardStyles}
`;
export const Card3 = styled.div`
  background: url(${Three});
  ${CardStyles}
`;
export const Card4 = styled.div`
  background: url(${Four});
  ${CardStyles}
`;
export const Card5 = styled.div`
  background: url(${Five});
  ${CardStyles}
`;
export const Card6 = styled.div`
  background: url(${Six});
  ${CardStyles}
`;
export const Card7 = styled.div`
  background: url(${Seven});
  ${CardStyles}
`;
export const Black = styled.div`
  background: #1d212379;
  width: 213px;
  height: 234px;
  padding: 10px;
  border-radius: 20px;

  @media screen and (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const DetailsDiv = styled.div`
  display: flex;
  gap: 0;
  margin: 150px 0 0 0;

  @media screen and (max-width: 830px) {
    margin: 0 0 0 0;
    gap: 10px;
  }
`;
export const Details = styled.div`
  width: 150px;

  @media screen and (max-width: 830px) {
    width: 120px;
  }
`;
export const Title = styled.h1`
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 400;
  margin: 0 0 auto 0;

  @media screen and (max-width: 830px) {
    font-size: 12px;
  }
`;
export const Artist = styled.h1`
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: left;

  @media screen and (max-width: 830px) {
    font-size: 10px;
  }
`;
export const IconImg = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 0 auto 0;
  background: #facd66;
  border-radius: 50%;
  padding: 10px;

  @media screen and (max-width: 830px) {
    width: 10px;
    height: 10px;
  }
`;
