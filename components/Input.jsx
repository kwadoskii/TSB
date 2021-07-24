import styled from "styled-components";

import color from "../constants/color";

export default function Input({
  checkboxText,
  name,
  hasLabel = false,
  type = "text",
  ...props
}) {
  const nameFormatted = name?.toLowerCase().split(" ").join("_");

  return (
    <Container>
      {hasLabel && <Label htmlFor={nameFormatted}>{name}</Label>}
      {type !== "checkbox" ? (
        <InputStyled {...props} name={nameFormatted} id={nameFormatted} type={type} />
      ) : (
        <CheckboxHolder>
          <InputCheckbox {...props} name={nameFormatted} id={nameFormatted} type={type} />
          <span>
            <label htmlFor={nameFormatted}>{checkboxText}</label>
          </span>
        </CheckboxHolder>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 1.5em 0;
  span {
    margin-left: 6px;
    font-weight: 500;
  }
`;

const CheckboxHolder = styled.div`
  padding: 4px;
  border-radius: 5px;
  transition: 1s;
  cursor: pointer;

  label,
  input {
    cursor: pointer;
  }
  :hover {
    background: #eef0f1;
  }
`;

const InputCheckbox = styled.input`
  outline: none;
  height: 0.95em;
  transform: scale(1.3);
`;

const InputStyled = styled.input`
  outline: none;
  border: 1px solid #b5bdc4;
  padding: 0.7em 0.85em;
  background-color: #f9fafa;
  border-radius: 5px;
  transition: all 2ms;
  font-size: 0.95em; /* or 14px */
  width: 100%;
  :focus {
    background-color: ${color.white};
    border-color: ${color.primary};
    box-shadow: 1px 1px 0 ${color.primary};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.6em;
  font-weight: 500;
`;
