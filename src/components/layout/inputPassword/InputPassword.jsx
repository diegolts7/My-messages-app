import { useState } from "react";
import styled from "styled-components";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const DivPassword = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  cursor: pointer;
  svg {
    position: absolute;
    right: 2%;
    top: 30%;
    color: #3a3a3a;
  }
  input {
    border: none;
    padding: 13px;
    background-color: inherit;
    border: 1px solid #a6a6a6;
    border-radius: 5px;
    font-size: 14px;
    width: 100%;
    &:focus {
      outline: 2px solid #8c8c8c;
    }
  }
`;

const InputPassword = ({ placeholder, password, setPassword }) => {
  const [showPassword, setShowPassword] = useState("password");

  function toggleShowPassword() {
    setShowPassword((before) => (before === "password" ? "text" : "password"));
  }
  return (
    <DivPassword>
      <input
        type={showPassword}
        name="password"
        autoComplete="new-password"
        placeholder={placeholder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {showPassword === "password" ? (
        <FaRegEyeSlash onClick={toggleShowPassword} />
      ) : (
        <FaRegEye onClick={toggleShowPassword} />
      )}
    </DivPassword>
  );
};

export default InputPassword;
