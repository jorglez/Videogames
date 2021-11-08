

const OptionInput = ({toSearch}) => {
  return ( 
    <select id={toSearch}>
      <option value="" disabled selected>--{toSearch}--</option>
      <option value="shooter">Shooter</option>
    </select>
   );
}
 
export default OptionInput;