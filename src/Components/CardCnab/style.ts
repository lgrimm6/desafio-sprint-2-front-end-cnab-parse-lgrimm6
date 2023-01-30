import styled from "styled-components";

const Li = styled.li`
  display: flex;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  background-color: rgb(238, 238, 238);
  padding-left: 50px;
  .div-info {
    width: 14%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .p-info {
      display: flex;
      width: 100%;
      color: red;
    }
    .p-value {
      display: flex;
      width: 100%;
    }
  }
`;

export default Li;
