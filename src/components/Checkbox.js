import React, { useState } from "react";



function Checkbox() {
  const [formData, setFormData] = useState({  //default State is this object
    firstName: "Sylvia",
    lastName: "Woods",
    admin: false,
  });

  function handleChange(event) { //an abstracted handler, take in name and value
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked; //if checkbox is checked, return checked
    }

    setFormData({ //set State
      ...formData, //copy current State object
      [name]: value, //add "firstname": input value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);  //in actuality we need to send this data somewhere --database??
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Checkbox