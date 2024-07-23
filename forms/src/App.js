// import { useState } from "react";

// import { Form } from "./l55-Homework/Form-babber";
import { PersonalForm } from "./l55-Homework/PersonalForm";

function App() {
  // const [formData, setformData] = useState({ firstname: " ", lastname: " ", email: "", isvisible: true, mode: "", favCar: "" })
  // function changeFirstHandler(event) {
  //   console.log("first name",event.target.value)
  // }
  // function changelastNameHandler(event) {
  //   console.log("lastname",event.target.value)
  // }
  // function comonChangeHandler(event) {
  //   // setformData({ ...formData, [event.target.name]: event.target.value })
  //   const { type, checked, name, value } = event.target
  //   setformData({ ...formData, [name]: type === 'checkbox' ? checked : value })

  //   console.log(formData)
  // }
  // function handleSubmit(event) {
  //   console.log("submit", formData)
  //   event.preventDefault();
  //   setformData({ firstname: " ", lastname: " ", email: "", isvisible: "", mode: "", favCar: " " })

  // }
  return (
    <div className="App">
      {/* <Form /> */}
      <PersonalForm />
      {/* <form onSubmit={ handleSubmit }> */}
      {/* <label id="firstname">FirstName</label>
        <input type="text" onChange={comonChangeHandler} value={formData.firstname} id="firstname" name="firstname" required />
        <br />
        <br />
        <br />
        <label id="lastname">Lastname</label>
        <input type="text" onChange={comonChangeHandler} value={formData.lastname} id="lastname" name="lastname" />
        <br></br>
        <br></br>
        <br></br>
        <label id="email">email</label>
        <input type="email" onChange={comonChangeHandler} value={formData.email} id="email" name="email" />
        <br></br>
        <br></br>

        <label id="checkbox">checkbox</label>
        <input type="checkbox" onChange={comonChangeHandler} checked={formData.isvisible} id="isvisible" name="isvisible" />
        <br></br>
        <br></br>
        <fieldset>
          <legend>Mode:</legend>
          <input type="radio"
            id="Online Mode" name="mode"
            value='Online Mode'
            checked={formData.mode == 'Online Mode'}
            onChange={comonChangeHandler}
          />
          <label htmlFor="Online Mode">Online Mode</label>
          <br />
          <input type="radio"
            id="Offline Mode" name="mode"
            value='Offline Mode'
            checked={formData.mode == 'Offline Mode'}
            onChange={comonChangeHandler}
          />
          <label htmlFor="Offline Mode">Offline Mode</label>
        </fieldset>




        <br></br>
        <select id="favCar" name="favCar" value={formData.favCar} onChange={comonChangeHandler}>
          <option value="scarpio">scarpio</option>
          <option value="fortuner">fortuner</option>
          <option value="tharrr">tharr</option>
          <option value="legender">legender</option>
          <option value="defender">defender</option>
        </select>
        <button>Click Here</button> */}

      {/* <button onClick={handleSubmit}>Click Here</button> */}
      {/* </form> */}
    </div>
  );
}

export default App;
