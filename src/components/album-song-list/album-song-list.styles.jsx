import styled from "styled-components";

export const AlbumSongListContainer = styled.div`
  padding: 0;
  width: 100%;
  font-family: quicksand;
  text-transform: capitalize;
  overflow: hidden !important;

  @media screen and (max-width: 830px) {
    padding: 0 0 110px 0;
  }
`;
export const Card = styled.div`
  background: rgba(51, 55, 59, 0.37);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 10px 30px 10px 10px;
  color: #fff;
  width: 1130px;
  margin: 0 0 10px 0;

  @media screen and (max-width: 830px) {
    width: 85%;
    margin: 0 0 10px 10px;
  }
  @media screen and (max-width: 400px) {
    width: 85%;
    margin: 0 0 10px 8px;
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 20px;
`;
export const AlbumImg = styled.img`
  width: 35px;
  height: 35px;
  margin: auto 0;
`;
export const Title = styled.h1`
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 400;
  margin: auto 0;
  color: #fff;
  margin: auto;
`;
export const Artist = styled.h1`
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 400;
  margin: auto;
`;
export const Duration = styled.h1`
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 400;
  margin: auto 0 auto auto;
  color: #fff;
`;
export const FavIcon = styled.img`
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  margin: auto 0;
`;
