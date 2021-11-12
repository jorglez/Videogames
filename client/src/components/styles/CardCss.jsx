import styled from 'styled-components'

export const CardCss = styled.div `
  height: 280px;
  width: 200px;
  border: solid black 2px;
  transition: transform .3s ease;
  border-radius: 5px;
  overflow: hidden;

  &:hover{
    transform: scale(1.15);
  }
`

export const CardHeadCss = styled.div `
  height: 120px;
  width: 100%;
  border-bottom: black 2px solid;

  & img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
export const CardBodyCss = styled.div `
  padding: 10px;
`