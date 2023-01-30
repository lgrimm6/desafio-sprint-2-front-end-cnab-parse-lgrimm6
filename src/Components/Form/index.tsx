import { useState } from "react";
import api from "../../Services";
import FormStyled from "./style";

const Form = ({ file, setFile, setResponseCnab }: any) => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const onChangeFile = (e: any) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setIsActiveButton(true);
    } else {
      setFile(null);
      setIsActiveButton(false);
    }
  };
  const submitForm = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      api
        .post("", formData)
        .then((res) => {
          console.log(res);
          setResponseCnab(res.data);
          return res;
        })
        .catch((error) => console.log(error));
    } else {
      alert("file not loaded");
    }
  };
  return (
    <FormStyled action="" onSubmit={submitForm} encType="multipart/form-data">
      <label htmlFor="">
        {" "}
        Selecionar arquivo
        <input type="file" onChange={onChangeFile} />
      </label>
      <button type="submit" disabled={!isActiveButton}>
        Enviar
      </button>
    </FormStyled>
  );
};

export default Form;
