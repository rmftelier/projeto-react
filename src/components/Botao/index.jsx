import "./styles.css";

const Botao = ({ texto, acao }) => {
  return (
    <div>
      <button className="botao" onClick={acao}>
        {texto}
      </button>
    </div>
  );
};

export default Botao;