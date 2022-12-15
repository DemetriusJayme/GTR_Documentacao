import imagemMER from "../../../src/assets/mer.png";

function Mer() {
  return (
    <>
      <p>Modelo de Entidade Relacionamento - MER</p>
      <p>
        Elaboramos o MER no intuito de entender as diferencas entre o modelo
        relacional e nao relacional.
      </p>
      <div>
        <img width="900px" src={imagemMER} alt="imagem do MER" />
      </div>
    </>
  );
}

export default Mer;
