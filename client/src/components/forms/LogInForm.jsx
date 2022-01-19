
import { useState } from "react";
import { FormControlCss, FormCss, SubmitButtonCss } from "../styles/FormCss";


const LogInForm = () => {

  const [user, getUser] = useState({
    userName:"",
    email:"",
    password:""
  })

  const handleInputChange = e => {
    getUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <FormCss onSubmit={e => e.preventDefault()}>
      <FormControlCss>
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id="userName" onChange={handleInputChange} />
      </FormControlCss>

      <FormControlCss>
        <label htmlFor="email">e-mail</label>
        <input type="text" name="email" id="email" onChange={handleInputChange} />
      </FormControlCss>

      <FormControlCss>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={handleInputChange} />
      </FormControlCss>

      <FormControlCss>
        <SubmitButtonCss>Add Game</SubmitButtonCss>
      </FormControlCss>

    </FormCss>
  );
}

export default LogInForm;