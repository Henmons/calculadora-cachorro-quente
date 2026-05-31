import { useState } from "react";

function Home() {
  const [quantidade, setQuantidade] = useState("");
  const [precoPao, setPrecoPao] = useState("");
  const [precoSalsicha, setPrecoSalsicha] = useState("");
  const [precoMolho, setPrecoMolho] = useState("");
  const [precoBatata, setPrecoBatata] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = async () => {
    const response = await fetch("http://localhost:3000/hotdog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantidade,
        precoPao,
        precoSalsicha,
        precoMolho,
        precoBatata,
      }),
    });

    const data = await response.json();
    setResultado(data);
  };

  return (
    <div>
      <h1>Calculadora de Cachorro-Quente</h1>

      <input
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Preço do pão"
        value={precoPao}
        onChange={(e) => setPrecoPao(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Preço da salsicha"
        value={precoSalsicha}
        onChange={(e) => setPrecoSalsicha(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Preço do molho"
        value={precoMolho}
        onChange={(e) => setPrecoMolho(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Preço da batata"
        value={precoBatata}
        onChange={(e) => setPrecoBatata(e.target.value)}
      />

      <br /><br />

      <button onClick={calcular}>
        Calcular
      </button>

      {resultado && (
        <div>
          <h2>Resultado</h2>
          <p>Quantidade: {resultado.quantidade}</p>
          <p>Custo Unitário: R$ {resultado.custoUnitario}</p>
          <p>Custo Total: R$ {resultado.custoTotal}</p>
        </div>
      )}
    </div>
  );
}

export default Home;