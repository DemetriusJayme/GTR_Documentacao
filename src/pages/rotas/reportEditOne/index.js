function ReportEditOne() {
  return (
    <>
      <h1>Rota para editar um Report</h1>
      <p>
        <b>Verbo:</b>POST
      </p>
      <p>
        <b>End Point:</b> /new<br></br>
        Retorna um Json com o Report editado :<br></br>
      </p>

      <pre>
        <code
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            backgroundColor: " #f1f1f1",
            padding: "2px",
            width: "900px",
          }}
        >
          {`{
INSERIR
}`}
        </code>
      </pre>
    </>
  );
}

export default ReportEditOne;
