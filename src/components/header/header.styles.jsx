import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 20px;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 830px) {
    z-index: 999;
    background: transparent;
    backdrop-filter: blur(15px);
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 34px;
    position: fixed;
    border-bottom: none;
  }

  @media screen and (max-width: 400px) {
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 34px;
  }
`;
export const LogoImg = styled.img`
  padding: 0;
  width: 40px;
  margin: auto 0 auto 0;

  @media screen and (max-width: 830px) {
    width: 30px;
    margin: auto 0;
  }
`;
export const Form = styled.form``;