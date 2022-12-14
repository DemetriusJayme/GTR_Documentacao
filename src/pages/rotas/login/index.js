function LogIn() {
  return (
    <>
      <h1>Rota para o LogIn de usuario</h1>
      <p>
        <b>Verbo:</b>POST
      </p>
      <p>
        <b>End Point:</b> /user/login<br></br>
        Retorna um Json com os dados do usuario recem logado com o Token:
        <br></br>
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

export default LogIn;
