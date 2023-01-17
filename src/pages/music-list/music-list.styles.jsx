import styled from "styled-components";

export const MusicListContainer = styled.div`
  padding: 10px 10px 150px 10px;
  background: #1D2123;

  @media screen and (max-width: 1100px) {
    padding: 0 0 60px 0;
  }
  @media screen and (max-width: 830px) {
    padding: 0.2px 0 0 0!important;
    margin: 0;
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
export const MusicListCom = styled.div``;