import styled from "styled-components";

export const ChartsContainer = styled.div`
  padding: 0;
  width: 100%;
  font-family: quicksand;
  text-transform: capitalize;

  @media screen and (max-width: 830px) {
    padding: 80px 0 0 10px;
  }
`;
export const Head = styled.h1`
  font-size: 24px;
  letter-spacing: 2px;
  margin: 5px 0 14px 0;
  color: #EFEEE0;
  text-align: left;
`;
export const Card = styled.div`
  background: #1a1e1f;
  border-radius: 20px;
  color: #fff;
  width: 480px;
  display: flex;
  gap: 20px;
  padding: 10px 20px 10px 10px;
  margin:  0 0 10px 0;

  @media screen and (max-width:1100px) {
    width: 88%;
  }
  // @media screen and (max-width: 830px) {
  //   width: 95%;
  // }
  @media screen and (max-width: 400px) {
    width: 87%;
  }
`;
export const CardImg = styled.img`
  width: 45px;
  height: 45px;
  margin: auto 0;

  @media screen and (max-width: 830px) {
    
  }
`;
export const DetailsDiv = styled.div``;
export const Title = styled.h1`
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 400;
`;
export const Artist = styled.h1`
  color: rgba(255, 255, 255, 0.5);
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: left;
`;
export const Duration = styled.h1`
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: left;
`;
export const FavIcon = styled.img`
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 50%;
  padding: 5px;
  margin: auto 0 auto auto;

  @media screen and (max-width: 830px) {
    width: 25px;
  height: 25px;
  }
`;
