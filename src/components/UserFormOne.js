import React, { useState } from "react";

const UserFormOne = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Fisrt Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserFormOne;
