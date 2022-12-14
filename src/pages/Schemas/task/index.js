function SchemaComentario() {
  return (
    <>
      <h1>Schema Task</h1>
      <p> Estrutura do Schema no DB para o Model de Task</p>
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
        <img
          src="/src/assets/schematask.png"
          alt="imagem do schema do Task"
        />
      </div>
    </>
  );
}

export default SchemaComentario;
