import React, { useState } from "react";
import "./App.css";
import CardCnab from "./Components/CardCnab";
import Form from "./Components/Form";
import { v4 as uuidv4 } from "uuid";

export interface ICnab {
  tipo: string;
  valor: number;
  cartao: string;
  cpf: string;
  dono_da_loja: string;
  nome_da_loja: string;
  data: string;
  hora: string;
}
function App() {
  const [file, setFile] = useState(null);
  const [responseCnab, setResponseCnab] = useState(null || []);
  const [stores, setStores] = useState(Array<string>);
  const create_stores = () => {
    responseCnab.forEach((element: ICnab) => {
      if (!stores.includes(element.nome_da_loja)) {
        setStores([...stores, element.nome_da_loja]);
      }
    });
    return stores;
  };

  const total_store = (store: string) => {
    const total = responseCnab
      .reduce((acc, current: ICnab) => {
        if (current.nome_da_loja === store) {
          return Number(acc) + Number(current.valor);
        }
        return acc;
      }, 0)
      .toFixed(2);

    return total;
  };

  return (
    <div className="App">
      <div className="divForm">
        <h1>Upload CNAB</h1>
        <Form
          file={file}
          setFile={setFile}
          setResponseCnab={setResponseCnab}
        ></Form>
      </div>
      <div>
        <main className="list-cnab">
          {create_stores().map((store: string) => (
            <ul className="ul-store" key={uuidv4()}>
              <div className="div-store">
                <h3>Loja: {store}</h3>
                <h4>Saldo: R${total_store(store)}</h4>
              </div>
              {responseCnab?.map((cnab: ICnab) => {
                if (cnab.nome_da_loja === store) {
                  return (
                    <CardCnab
                      cartao={cnab.cartao}
                      cpf={cnab.cpf}
                      data={cnab.data}
                      dono_da_loja={cnab.dono_da_loja}
                      hora={cnab.hora}
                      nome_da_loja={cnab.nome_da_loja}
                      tipo={cnab.tipo}
                      valor={cnab.valor}
                      key={uuidv4()}
                    ></CardCnab>
                  );
                }
                return null;
              })}
            </ul>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
