import styled from "styled-components";

export const GroupContainer = styled.div`
  display: flex;
  padding: 0;
  height: 36px;
  gap: 10px;
  align-items: center;
  border-radius: 50px;
  margin: auto 0;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);

  &:focus {
    width: 20px !important;
  }

  @media screen and (max-width: 830px) {
    width: 95%;
    padding: 5px 0;
  }
  @media screen and (max-width: 400px) {
    width: 87%;
    padding: 5px 0;
  }
`;

export const FormInputContainer = styled.input`
  background: transparent;
  border: none;
  width: 450px;
  height: 20px;
  border-radius: 50px;
  margin: auto 0;

  @media screen and (max-width: 800px) {
    width: 260px;
    margin: auto 0;
  }

  &:focus {
    color: #fff;
    outline: none;
    font-size: 16px;
    font-family: quicksand;
    letter-spacing: 1px;
    margin: auto 0;

    &::placeholder {
      padding: 0;
      margin: auto 0;
    }

    @media screen and (max-width: 830px) {
      width: 260px;
      margin: auto 0 auto 15px;
    }
  }

  &::placeholder {
    font-weight: normal;
    font-size: 16px;
    font-family: quicksand;
    letter-spacing: 1px;
    color: #fff;
    outline: none;
    padding: 0;
    margin: auto 0;
    text-transform: capitalize;

    @media screen and (max-width: 830px) {
      padding: 0 0 0 15px;
    }
  }
`;
export const SearchImg = styled.img`
  width: 17px;
  margin: auto 0 auto 10px;
  padding: 0;

  &:focus {
    @media screen and (max-width: 830px) {
      width: 30px;
      padding: 0;
      margin: auto 0;
    }
  }
  @media screen and (max-width: 830px) {
    width: 30px;
    padding: 0 15px 0 0;
    margin: auto 0;
  }
`;
