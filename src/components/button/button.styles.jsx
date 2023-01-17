import styled from "styled-components";

export const ButtonContainer = styled.div`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  border-radius: 32px;
  cursor: pointer;
  letter-spacing: 2px;
  font-family: quicksand;
  font-weight: 400;
  text-transform: capitalize;
  transition: all 0.9s ease-in-out;
  border: none;
  margin: auto 0 !important;
  // font-size: 16px !important;

  &:hover {
    background-color: #444946;
    color: #fff;
    border: none;
    transform: scale(1);
  }
`;
