import imagemSchemaLog from "../../../assets/schemaLog.jpg";

function SchemaLog() {
  return (
    <>
      <h1>Schema Log</h1>
      <p> Estrutura do Schema no DB para o Model de Log</p>
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
        <img src={imagemSchemaLog} alt="imagem do schema do Log" />
      </div>
    </>
  );
}

export default SchemaLog;
