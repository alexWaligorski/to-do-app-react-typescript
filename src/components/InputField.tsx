import React from "react";
import "./styles.css";

const InputField: React.FC = () => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a new task"
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
