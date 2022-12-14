import imagemSchemaReport from "../../../assets/schemareport.png";

function SchemaReport() {
  return (
    <>
      <h1>Schema Report</h1>
      <p> Estrutura do Schema no DB para o Model de Report</p>
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
        <img src={imagemSchemaReport} alt="imagem do schema do Report" />
      </div>
    </>
  );
}

export default SchemaReport;
