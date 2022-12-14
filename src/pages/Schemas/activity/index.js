import imagemSchemaActivity from "../../../assets/schemaactivity.jpg";

function schemaActivity() {
  return (
    <>
      <h1>Schema Chatbot</h1>
      <p> Estrutura do Schema no DB para o Model de Chatbot</p>
      <pre>
        <code
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            backgroundColor: " #f1f1f1",
            padding: "2px",
            width: "1000px",
          }}
        ></code>
      </pre>
      <div>
      <img src={imagemSchemaActivity} alt="imagem do schema do Activity" />
      </div>
    </>
  );
}

export default schemaActivity;
