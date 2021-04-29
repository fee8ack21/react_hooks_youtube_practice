import React, { useState } from "react";
import useInput from "../hooks/useInput";

const UserFormTwo = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Fisrt Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserFormTwo;
