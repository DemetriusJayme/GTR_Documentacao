function SchemaResposta() {
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
        >
          <span>const RespostaSchema = new Schema{"({"}</span>
          <span>
            {" "}
            <b>user:</b>
            {` { type: Schema.Types.ObjectId, ref: "User" }`},
          </span>
          <span>
            {" "}
            <b>task:</b>
            {` { type: Schema.Types.ObjectId, ref: "Task" }`},
          </span>
          <span>
            {" "}
            <b>report:</b>
            {` { type: Schema.Types.ObjectId, ref: "Report" }`},
          </span>
          <span>
            {" "}
            <b>date:</b>
            {` { type: Date, default: Date.now}`},
          </span>
          <span>
            {" "}
            <b>status:</b>
            {` { type: String}`},
          </span>
          <span>{"}"},</span>
        </code>
      </pre>
    </>
  );
}

export default SchemaResposta;
