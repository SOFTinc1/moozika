import React from "react";
import { GroupContainer, FormInputContainer, SearchImg } from "./search.styles";
import SearchIcon from "../../assets/svg/search.svg";

const Search = ({ placeholder, handleChange }) => (
  <GroupContainer>
    <SearchImg src={SearchIcon} />
    <FormInputContainer placeholder={placeholder} onChange={handleChange} />
  </GroupContainer>
);

export default Search;