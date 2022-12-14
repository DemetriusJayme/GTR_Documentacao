function SchemaReceita() {
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
        >
          <span>const ReportSchema = new Schema{`({`}</span>

          <span>
            {"  "}
            <b>user: </b>
            {`{ type: Schema.Types.ObjectId, ref: "User" }`},
          </span>
          <span>
            {"  "}
            <b>refPeriod: </b>
            {`{type:String}`},
          </span>
          <span>
            {"  "}
            <b>year:</b>
            {`{type:Number}`},
          </span>
          <span>
            {"  "}
            <b>startDate:</b>
            {` { type: Date, require: true }`},
          </span>
          <span>
            {"  "}
            <b>factors:</b>
            {"{"}
          </span>
          <span>
            {"  "}
            enum: [
          </span>
          <span>{"    Communication and delivery of information"}</span>
          <span>
            {"    Commitment to the organizational's norms and culture"}
          </span>
          <span>{"    Delivery of results"}</span>
          <span>{"    Individual skills and behaviors"}</span>
          <span>{"    Proactivity"}</span>
          <span>{"    Self-management"}</span>
          <span>{"    Engagement in tasks and activities"}</span>
          <span>{"    Deadline accomplishments], "}</span>
          <span>
            {"  "}
            score:
            {"{"}
          </span>
          <span>{"    "}type: Number, min: 0, max: 10 </span>
          <span>
            {"  "}
            {" }"},
          </span>
          <span>
            {"  "}
            note:
            {"{"}
          </span>
          <span>{"    "}type: String </span>
          <span>
            {"  "}
            <b>porcoes:</b>
            {`{ type: String, require: true }`},
          </span>

          {"});"}
        </code>
      </pre>
      <p>
        O usuario tera a opçao de fazer o upload da imagem{" "}
        <code style={{ backgroundColor: " #f1f1f1", color: "red" }}>
          imagemupload:
        </code>{" "}
        ou colar uma URL{" "}
        <code style={{ backgroundColor: " #f1f1f1", color: "red" }}>
          imagemurl:
        </code>{" "}
        direto da internet
      </p>
    </>
  );
}

export default SchemaReceita;
