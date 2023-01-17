import React from "react";
import { GroupContainer, FormInputContainer, SearchImg } from "./search2.styles";
import SearchIcon from "../../assets/svg/search.svg";

const Search2 = ({ placeholder, handleChange }) => (
  <GroupContainer>
    <FormInputContainer placeholder={placeholder} />
    <SearchImg src={SearchIcon} />
  </GroupContainer>
);

export default Search2;