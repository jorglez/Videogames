import styled from 'styled-components'

export const FormCss = styled.form `
  width: 700px;
  padding: 20px;
  margin: 50px auto;
  border: 1px solid black;
`
export const FormControlCss = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  & label{
    font-weight: bold;
    padding-bottom: 4px;
  }
  & input{
    padding: 10px;
  }
  & input[type=date]{
    padding: 7.5px;
  }
  & select{
    padding: 5px;
  }
`
export const SharedRowCss = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`
export const DynamicSelectCss = styled.div `
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
`
export const AddSelectCss = styled.button `
  font-size: 25px;
  height: 33px;
  width: 33px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;

`
export const SubmitButtonCss = styled.button `
  margin-top: 10px;
  padding: 10px;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  font-size: 20px;
  
`