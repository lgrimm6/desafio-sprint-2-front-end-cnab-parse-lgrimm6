import { ICnab } from "../../App";
import Li from "./style";

const CardCnab = ({
  cartao,
  cpf,
  data,
  dono_da_loja,
  hora,
  nome_da_loja,
  tipo,
  valor,
}: ICnab) => {
  const types: any = {
    1: "Débito",
    2: "Boleto",
    3: "Financimaneto",
    4: "Crédito",
    5: "Recebimento Empréstimo",
    6: "Vendas",
    7: "Recebimento TED",
    8: "Recebimento DOC",
    9: "Aluguel",
  };

  return (
    <Li className="card-cnab">
      <div className="div-info">
        <p className="p-info">TIPO</p>
        <p className="p-value">{types[tipo]}</p>
      </div>
      <div className="div-info">
        <p className="p-info">VALOR</p>
        <p className="p-value">{valor}</p>
      </div>
      <div className="div-info">
        <p className="p-info">CARTÃO</p>
        <p className="p-value">{cartao}</p>
      </div>
      <div className="div-info">
        <p className="p-info">CPF</p>
        <p className="p-value">{cpf}</p>
      </div>
      <div className="div-info">
        <p className="p-info">DONO</p>
        <p className="p-value">{dono_da_loja}</p>
      </div>
      <div className="div-info">
        <p className="p-info">DATA</p>
        <p className="p-value">{data}</p>
      </div>
      <div className="div-info">
        <p className="p-info">HORA</p>
        <p className="p-value">{hora}</p>
      </div>
    </Li>
  );
};

export default CardCnab;
