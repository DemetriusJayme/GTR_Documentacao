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
            <Link to="/schema/chatbot">Chatbot</Link>
          </li>
        </ul>
        <p>Rotas</p>
        <p>Users</p>
        <ul>
          <li>
            <Link to="/rotas/usuario/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/login">LogIn</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/editar">Editar</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/id">Buscar por ID</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/todos">Buscar por todos os usuarios</Link>
          </li>
          <li>
            <Link to="/rotas/usuario/logado">Buscar pelo usuario logado</Link>
          </li>
        </ul>

        <p>Task</p>
        <ul>
          <li>
            <Link to="/rotas/receita/criar">Criar</Link>
          </li>
          <li>
            <Link to="/rotas/receita/todas">Busca de todas as receitas</Link>
          </li>
          <li>
            <Link to="/rotas/receita/buscar/id">Busca de receita por ID</Link>
          </li>
          <li>
            <Link to="/rotas/receita/editar">Editar</Link>
          </li>
          <li>
            <Link to="/rotas/receita/favoritos/adicionar">
              Adicionar aos Favoritos
            </Link>
          </li>
          <li>
            <Link to="/rotas/receita/favoritos/excluir">
              Deletar dos Favoritos
            </Link>
          </li>
        </ul>

        <p>Report</p>
        <ul>
          <li>
            <Link to="/rotas/comentario/criar">Criar</Link>
          </li>
          <li>
            <Link to="/rotas/comentario/editar">Editar</Link>
          </li>
          <li>
            <Link to="/rotas/comentario/buscar">popular</Link>
          </li>
        </ul>

        <p>Log</p>
        <ul>
          <li>
            <Link to="/rotas/resposta/criar">Criar</Link>
          </li>
          <li>
            <Link to="/rotas/resposta/editar">Editar</Link>
          </li>
          <li>
            <Link to="/rotas/resposta/buscar">popular</Link>
          </li>
        </ul>

        <p>Chatbot</p>
        <ul>
          <li>
            <Link to="/rotas/resposta/criar">Criar</Link>
          </li>
          <li>
            <Link to="/rotas/resposta/editar">Editar</Link>
          </li>
          <li>
            <Link to="/rotas/resposta/buscar">popular</Link>
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
