function SchemaChatbot() {
  return (
    <>
      <h1>Schema Chatbot</h1>
      <p> Estrutura do Schema no DB para o Model de Chatbot</p>
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
          src="/src/assets/schemachatbot.png"
          alt="imagem do schema do Chatbot"
        />
      </div>
    </>
  );
}

export default SchemaChatbot;
