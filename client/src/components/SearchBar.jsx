import { SBInputCss, SButton, SearchBarCss } from "./styles/SearchBarCss";

const SearchBar = () => {
  return (
    <SearchBarCss>
      <div>
        <SBInputCss name="search" placeholder="Buscar" ></SBInputCss>
        <SButton>
          Search
        </SButton>
      </div>
    </SearchBarCss>
  );
}

export default SearchBar;