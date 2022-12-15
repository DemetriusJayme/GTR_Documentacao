function Deletes() {
  return (
    <>
      <pre>
        <p>Deletar User:</p>
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
          <span>
            <b>Verbo:</b>DELETE
          </span>
          <span>
            <b>EndPoint:</b>/user/delete/
          </span>
        </code>

        <p>Deletar Task:</p>
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
          <span>
            <b>Verbo:</b>DELETE
          </span>
          <span>
            <b>EndPoint:</b>/task/delete/{`{id}`}
          </span>
        </code>

        <p>Deletar Report:</p>
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
          <span>
            <b>Verbo:</b>DELETE
          </span>
          <span>
            <b>EndPoint:</b>/report/delete/{`{id}`}
          </span>
        </code>

        <p>Deletar Activity:</p>
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
          <span>
            <b>Verbo:</b>DELETE
          </span>
          <span>
            <b>EndPoint:</b>/activity/delete/{`{id}`}
          </span>
        </code>
      </pre>
    </>
  );
}

export default Deletes;
