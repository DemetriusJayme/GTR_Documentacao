function ActivityNew() {
  return (
    <>
      <h1>Rota para a Inclusão de uma Activity</h1>
      <p>
        <b>Verbo:</b>POST
      </p>
      <p>
        <b>End Point:</b> /activity/new
        <br></br>
        Retorna um Json com a activity inserida :<br></br>
      </p>

      <pre>
        <p>Body:</p>
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
        <p>Retorno:</p>

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

export default ActivityNew;
