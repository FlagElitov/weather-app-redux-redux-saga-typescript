import React from "react";

interface InputBlock {
  city: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.KeyboardEvent) => void;
}

const Input: React.FC<InputBlock> = ({ city, handleChange, handleClick }) => {
  return (
    <div className="input-field mt20 input">
      <input
        type="text"
        onChange={handleChange}
        value={city}
        id="title"
        placeholder="Город"
        onKeyPress={handleClick}
      />
      <label htmlFor="title" className="active">
        Уведите город
      </label>
    </div>
  );
};

export default Input;
