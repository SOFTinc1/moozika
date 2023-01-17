import styled from "styled-components";

export const GroupContainer = styled.div`
  display: flex;
  width: 1000px;
  padding: 0;
  height: 36px;
  gap: 10px;
  align-items: center;
  border-radius: 50px;
  margin: auto 0;
  background: transparent;
  // border: 1px solid rgba(255, 255, 255, 0.25);

  &::focus {
    border: 1px solid rgba(255, 255, 255, 0.25);

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FormInputContainer = styled.input`
  background: transparent;
  border: none;
  width: 950px;
  height: 20px;
  border-radius: 50px;

  @media screen and (max-width: 800px) {
    width: 260px;
  }

  &:focus {
    color: rgba(255, 255, 255, 0.25);
    outline: none;
    font-size: 16px;
    font-family: quicksand;
    letter-spacing: 1px;
    margin: auto 0!important;

    @media screen and (max-width: 800px) {
      color: rgba(255, 255, 255, 0.25);
      width: 260px;
    }
  
  }

  &::placeholder {
    font-weight: normal;
    font-size: 16px;
    font-family: quicksand;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.25);
    outline: none;
    padding: 0;
    margin: auto 0!important;
    text-transform: capitalize;

    @media screen and (max-width: 800px) {
      color: #000;  
    }

    &:focus {
      margin: auto;
    }
  }
`;
export const SearchImg = styled.img`
  width: 17px;
  margin: auto 0 auto 10px;
  padding: 0;

  @media screen and (max-width: 800px) {
   width: 40px;
  }
`;
