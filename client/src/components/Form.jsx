import { useState } from "react"

import { AddSelectCss, DynamicSelectCss, FormControlCss, FormCss, SharedRowCss, SubmitButtonCss } from "./styles/FormCss";


const Form = () => {

  const [platformArr, setPlatformArr] = useState([{ id: "", platform: "" }])
  const [genreArr, setGenreArr] = useState([{ id: "", genre: "" }])

  const [formInput, setFormInput] = useState({
    title: "",
    release: "",
    rating: "",
    platforms:"",
    genres:"",
    description: ""
  })

  //this function saves values from any field but genre and platform
  const handleInputChange = (e) => {

    setFormInput({
      ...formInput,
      [e.target.name]: [e.target.value]
    })
  }

  ///// ===== Add and Delete Functions for Platform and Genre fields =====//

  //adds a new object to the plaform array
  const addPlatformField = () => {
    setPlatformArr([...platformArr, { id: "", platform: "" }])
  }

  //deletes the selected platform field
  const deletePlatformField = index => {
    let newPlatformArr = [...platformArr]
    newPlatformArr.splice(index, 1)

    setPlatformArr(newPlatformArr)
  }

  //adds a new object to the genre array
  const addGenreField = () => {
    setGenreArr([...genreArr, { id: "", genre: "" }])
  }

  //deletes the selected genre field
  const deleteGenreField = index => {
    let newGenreArr = [...genreArr]
    newGenreArr.splice(index, 1)

    setGenreArr(newGenreArr)
  }

  //====== Handlers to save values in their respective state ======//

  const platformHandler = (i, value) => {
    let newPlatformArr = [...platformArr]
    newPlatformArr[i] = { id: "", platform: value }

    setPlatformArr(newPlatformArr)
    setFormInput({
      ...formInput,
      platforms: newPlatformArr
    })
    console.log(formInput.platforms)
  }

  const genreHandler = (i, value) => {
    let newGenreArr = [...genreArr]
    newGenreArr[i] = { id: "", genre: value }

    setGenreArr(newGenreArr)
    setFormInput({
      ...formInput,
      genres: newGenreArr
    })
  }

  return (
    <FormCss onSubmit={e => e.preventDefault()}>
      <FormControlCss>
        <label htmlFor="title">Game Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
        />
      </FormControlCss>

      <SharedRowCss>
        <FormControlCss>
          <label htmlFor="release">Release Date</label>
          <input
            type="date"
            name="release"
            id="release"
            onChange={handleInputChange}
          />
        </FormControlCss>
        <FormControlCss>
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            name="rating"
            id="rating"
            onChange={handleInputChange}
          />
        </FormControlCss>
      </SharedRowCss>

      {platformArr.map((input, index) => (
        <DynamicSelectCss key={index}>
          <FormControlCss>

            <label htmlFor="platform">platform {(index + 1)}</label>
            <select
              name="platform"
              id="platform"

              value={input.platform || "default"}
              onChange={(e) => platformHandler(index, e.target.value)}
            >
              <option value="default" disabled>Choose platform</option>
              <option value="ps3">ps3</option>
              <option value="xbox">xbox</option>
            </select>
          </FormControlCss>
          <AddSelectCss onClick={() => addPlatformField()} >+</AddSelectCss>

          {// index = 0 is considered false, so the first input does not have a delete button
            index ?
              <AddSelectCss onClick={() => deletePlatformField(index)}> - </AddSelectCss>
              : null
          }
        </DynamicSelectCss>
      ))}


      {genreArr.map((input, index) => (
        <DynamicSelectCss key={index}>
          <FormControlCss>
            <label htmlFor="genre">Genre {(index + 1)} </label>
            <select
              name="genre"
              value={input.platform || "default"}
              id="genre"
              onChange={(e) => genreHandler(index, e.target.value)}
            >
              <option value="default" disabled>Choose Genre</option>
              <option value="shoter">shooter</option>
              <option value="rpg">rpg</option>
            </select>
          </FormControlCss>
          <AddSelectCss onClick={() => addGenreField()}> + </AddSelectCss>
          {
            index ?
              <AddSelectCss onClick={() => deleteGenreField(index)}> - </AddSelectCss>
              : null
          }

        </DynamicSelectCss>
      ))}


      <FormControlCss>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="10"
          onChange={handleInputChange}
        ></textarea>
      </FormControlCss>

      <FormControlCss>
        <SubmitButtonCss>Add Game</SubmitButtonCss>
      </FormControlCss>

    </FormCss>
  );
}

export default Form;