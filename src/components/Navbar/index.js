import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div style={{ overflow: "scroll", height: "60%", paddingRight: "15px" }}>
        <Link to="/">
          <p>Principal</p>
        </Link>
        <Link to="/grupo">
          <p>Grupo</p>
        </Link>
        <p>Schemas</p>
        <ul>
          <li>
            <Link to="/schema/user">User</Link>
          </li>
          <li>
            <Link to="/schema/task">Task</Link>
          </li>
          <li>
            <Link to="/schema/report">Report</Link>
          </li>
          <li>
            <Link to="/schema/log">Log</Link>
          </li>
          <li>
            <Link to="/schema/activity">Activity</Link>
          </li>
        </ul>
        <p>Rotas</p>
        <p>User</p>
        <ul>
          <li>
            <Link to="/rotas/usuario/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/login">LogIn</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/create">New</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/edit">Edit</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/id">Search by ID</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/all">All</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/logado">Search by logged ID</Link>
          </li>
        </ul>

        <p>Task</p>
        <ul>
          <li>
            <Link to="/rotas/task/new">New</Link>
          </li>
          <li>
            <Link to="/rotas/task/workedhours">Worked Hours</Link>
          </li>
          <li>
            <Link to="/rotas/task/outoftime">OutOfTime</Link>
          </li>
          <li>
            <Link to="/rotas/task/status">Status</Link>
          </li>
        </ul>

        <p>Report</p>
        <ul>
          <li>
            <Link to="/rotas/comentario/criar">New</Link>
          </li>
          <li>
            <Link to="/rotas/comentario/editar">All</Link>
          </li>
          <li>
            <Link to="/rotas/comentario/buscar">Get one by ID</Link>
          </li>
          <li>
            <Link to="/rotas/comentario/buscar">Edit one by ID</Link>
          </li>
        </ul>

        <p>Log</p>
        <ul>
          <li>
            <Link to="/rotas/resposta/criar">My logs</Link>
          </li>
        </ul>

        <p>Activity</p>
        <ul>
          <li>
            <Link to="/rotas/resposta/criar">?</Link>
          </li>
        </ul>

        <Link to="/rotas/delete">
          <p>Rotas de Delete</p>
        </Link>
        <Link to="/rotas/upload">
          <p>Rota de UpLoad de imagens</p>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
