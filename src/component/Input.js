import { useState } from "react";

const Input = () => {
  let [name, setname] = useState();
  return (
    <div className="input">
      <input
        type="text"
        onChange={(e) => {
          setname(e.target.value);
        }}
      ></input>
      <button>Search</button>
      <h1>{name}</h1>
    </div>
  );
};
export default Input;
