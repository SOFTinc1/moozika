import styled from "styled-components";
import BackImg from "../../assets/images/bg.png";

export const AlbumContainer = styled.div`
  background: url(${BackImg});
  background-repeat: no-repeat;
  background-size: cover;
  over-flow-y: auto;
  padding: 0 0 100px 0;

  @media screen and (max-width: 1100px) {
    padding: 0;
  }
  @media screen and (max-width: 830px) {
    background-size: contain;
    background-repeat: repeat;
    padding: 0 0 50px 0;
  }
`;
export const BlackCover = styled.div`
  background: #1d2123da;
  position: relative;
  padding: 0 0 20px 10px;
  overflow-y: auto;

  @media screen and (max-width: 830px) {
    padding: 0;
  }
`;
export const Basic = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0 0 0;

  @media screen and (max-width: 830px) {
    display: block;
    margin: 0;
  }
`;
export const AlbumCom = styled.div``;
