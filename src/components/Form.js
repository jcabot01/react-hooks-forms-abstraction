import React, { useState } from "react";






function Form() {
  const [formData, setFormData] = useState ({ //formData is now State; it's an object containing firstName (key): "John" (value) etc.
    firstName: "John",
    lastName: "Henry",
  }) 
  
  // function handleFirstNameChange(event) { //handler; set form State with a copy of current State, plus first name value from input field
  //   setFormData({
  //     ...formData, //because formData is an object, we have to make a copy of key:value pairs with spread operator
  //     firstName: event.target.value, //overwrite the existing first name with the input value
  //   })
  // }

  function handleChange(event) { // above we have 2 handlers for 1st name/last name, now we have one handler
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <form>
      <input 
        type="text" 
        name="firstname"
        onChange={handleChange} 
        value={formData.firstName}
      />
      <input 
        type="text" 
        name="lastname"
        onChange={handleChange} 
        value={formData.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
