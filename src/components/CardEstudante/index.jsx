import { SubSubTitulo } from "../Text";
import "./styles.css";

const CardEstudante = ({
  fotoUrl,
  nome,
  comidaQueNaoGosta,
  experienciaPositiva
}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={fotoUrl} alt="foto da estudante" />
      </div>
      <div className="container">
        <SubSubTitulo sx={{ textAlign: "center" }}>{nome}</SubSubTitulo>
        <hr /> {/* Divider entre o nome e as informações */}
        <p>
          <b>Comida que não gosta: </b>
          {comidaQueNaoGosta}
        </p>
        <hr />
        <p>
          <b>Experiência muito massa:</b>
          {experienciaPositiva}
        </p>
      </div>
    </div>
  );
};

export default CardEstudante;
