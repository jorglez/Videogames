import { useState } from "react";


const OptionInput = ({ toSearch }) => {
  const [value, getValue] = useState("")

  const inputHandler = e => {
    getValue(e.target.value)
  }

  console.log(value)
  return (
    <select id={toSearch} value={value} onChange={inputHandler}>
      <option value="" disabled>--{toSearch}--</option>
      <option value="shooter">Shooter</option>
    </select>
  );
}

export default OptionInput;