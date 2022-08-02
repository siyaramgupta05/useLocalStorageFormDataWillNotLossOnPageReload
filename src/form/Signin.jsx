import React, { useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const Signin = () => {
  const [name, setName] = useLocalStorage("key", "");
  //const dd = useLocalStorage("key", name);
  console.log(name);
  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default Signin;
