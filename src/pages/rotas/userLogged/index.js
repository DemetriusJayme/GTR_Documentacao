function UserLogged() {
  return (
    <>
      <h1>Rota para a Busca de usuario que esta atualmente logado</h1>
      <p>
        <b>Verbo:</b>GET
      </p>
      <p>
        <b>End Point:</b> /user/user/logged<br></br>
        Retorna um Json com os dados do usuario Logado após autenticação :
        <br></br>
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

export default UserLogged;
