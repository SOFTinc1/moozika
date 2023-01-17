import styled from "styled-components";

export const CarouselContainer = styled.div`
  padding: 0 0 150px 10px;
  width: 100% !important;
  font-family: quicksand;
  text-transform: capitalize;

  @media screen and (max-width: 800px) {
    padding: 30px 10px 150px 10px;
    gap: 10px;
  }
`;
export const H1 = styled.h1`
  font-size: 34px;
  color: #fff;
  font-weight: 400;
`;
export const Carousel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0;
  width: 100% !important;

  @media screen and (max-width: 830px) {
    overflow-x: scroll !important;
    display: flex;
    gap: 20px;
  }
`;
export const Card = styled.div`
  margin: 0 auto 30px auto;
  @media screen and (max-width: 800px) {
  }
`;
export const CoverImg = styled.img`
  width: 250px;
  border-radius: 23px;

  @media screen and (max-width: 830px) {
    width: 200px !important;
  }
`;
export const Title = styled.h1`
  font-size: 16px;
  color: #fff;
  font-weight: 400;
`;
export const Artist = styled.h1`
  font-size: 12px;
  color: #fff;
  font-weight: 400;
`;
