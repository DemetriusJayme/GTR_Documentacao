function UserAll() {
  return (
    <>
      <h1>Rota para a Busca de Todos os usuarios</h1>
      <p>
        <b>Verbo:</b>GET
      </p>
      <p>
        <b>End Point:</b> /user/all<br></br>
        Retorna um Json com os dados de todos os usuarios em uma array:<br></br>
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

export default UserAll;
