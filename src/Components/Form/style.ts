import styled from "styled-components";

const FormStyled = styled.form`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
  background-color: white;
  label {
    display: flex;
    flex-direction: column;
    input {
      width: 300px;
      height: 30px;
    }
  }

  button {
    width: 250px;
    height: 30px;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
`;

export default FormStyled;
