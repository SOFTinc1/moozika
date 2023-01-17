import styled from "styled-components";

export const HomepageContainer = styled.div`
  padding: 10px 10px;
  margin: 0;
  background: #1d2123;

  @media screen and (max-width: 830px) {
    padding: 0;
    width: 100% !important;
    overflow: hidden !important;
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
export const Flex = styled.div`
  display: flex;
  gap: 30px;
  padding: 0;
  width: 100% !important;

  @media screen and (max-width: 830px) {
    display: block;
    margin: 0;
  }
`;
export const HomeItems = styled.div``;