import styled from "styled-components"

export const NavBarCss = styled.nav `
  background-color: black;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-bottom: 30px;

`

export const NavBarLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  & a{
    text-decoration: none;
    color: white;
  }
`