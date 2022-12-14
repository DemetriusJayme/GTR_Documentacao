function SchemaComentario() {
  return (
    <>
      <h1>Schema Task</h1>
      <p> Estrutura do Schema no DB para o Model de Comentario</p>
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
          <span>const TaskSchema = new Schema(</span>
          <span>{"{"}</span>
          <span>
            {" "}
            <b>author:</b>
            {`{ type: Schema.Types.ObjectId, ref: "User", required: true }`},
          </span>
          <span>
            {" "}
            <b>description:</b>{" "}
            {`{ type: String, required: true, trim: true, minlength: 3 }`},
          </span>
          <span>
            {" "}
            <b>name:</b>{" "}
            {`{ type: String, required: true, trim: true, minlength: 3 },`}
          </span>
          <span>
            {" "}
            <b>deadline:</b>
            {`{ type: Date, trim: true }`},
          </span>
          <span>
            {" "}
            <b>estimated:</b> {`{ type: String, trim: true },`}
          </span>
          <span>
            {" "}
            <b>priority:</b>{" "}
            {`{ type: String, trim: true, lowercase: true, enum: ["high", "regular", "low"], default: "regular" },`}
          </span>
          <span>
            {" "}
            <b>status:</b>{" "}
            {`{ type: String, trim: true, lowercase: true, enum: ["started", "rejected", "active", "pending", "done", "archive"],
      default: "started" },`}
          </span>
          <span>
            {" "}
            <b>activities:</b>
            {`{ type: Schema.Types.ObjectId, ref: "Activity" }`},
          </span>
          <span>{"}"},</span>
          <span>{`{ timestamps: true }`}</span>
          <span>);</span>
        </code>
      </pre>
    </>
  );
}

export default SchemaComentario;
