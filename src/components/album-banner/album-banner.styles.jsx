import styled from "styled-components";
import Button from "../button/button.components";

export const AlbumContainer = styled.div`
  padding: 0;
  font-family: quicksand;
  text-transform: capitalize;

  @media screen and (max-width: 830px) {
    padding: 0 10px;
    margin: 100px 0 0 0;
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0 50px 0;

  @media screen and (max-width: 830px) {
    display: block;
  }
`;
export const CoverImg = styled.img`
  width: 300px;
  border-radius: 35.1703px;

  @media screen and (max-width: 830px) {
    width: 100%;
  }
`;
export const AlbumDetails = styled.div`
  margin: 100px 0 0 0;

  @media screen and (max-width: 830px) {
    margin: 10px 0 0 0;
  }
`;
export const Title = styled.h1`
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 35px;
  color: #a4c7c6;
  margin: 0;
`;
export const Desc = styled.p`
  width: 527px;
  font-weight: 400;
  font-size: 14px;
  color: #efeee0;
  line-height: 22px;

  @media screen and (max-width: 830px) {
    width: 100%;
  }
`;
export const Desc2 = styled.h1`
  font-weight: 400;
  font-size: 14px;
  color: #efeee0;
  line-height: 22px;
  margin: 0;
`;
export const ButtonsBar = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  gap: 10px;
`;
export const ButtonContainer = styled(Button)`
  width: auto;
  padding: 10px 20px;
  display: flex;
  gap: 10px;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 0 !important;
`;
export const Icon2 = styled.img`
  width: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  padding: 10px;

  @media screen and (max-width: 525px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;
export const Play = styled.h1`
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 400;
  margin: auto 0 !important;
  color: #fff;
`;
