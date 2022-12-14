import imagemSchemaUser from "../../../assets/schemauser.jpg";

function SchemaUser() {
  return (
    <>
      <h1>Schema User</h1>
      <p> Estrutura do Schema no DB para o Model de User</p>
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
      <img src={imagemSchemaUser} alt="imagem do schema do User" />
      </div>
    </>
  );
}

export default SchemaUser;
