import Principal from "../principal";
import Grupo from "../grupo/index";

import SchemaUser from "../Schemas/user";
import SchemaTask from "../Schemas/task";
import SchemaReport from "../Schemas/report";
import SchemaLog from "../Schemas/log";
import SchemaChatbot from "../Schemas/chatbot";

import NavBar from "../../components/Navbar";

import SignUp from "../rotas/siginup";
import LogIn from "../rotas/login";

import UsuarioEditar from "../rotas/UsuarioEditar";
import UsuarioId from "../rotas/usuarioId";
import Usuariotodos from "../rotas/Usuariotodos";
import UsuarioLogado from "../rotas/usuariologado";

import ReceitasCriar from "../rotas/receitaCriar";
import ReceitasTodas from "../rotas/receitasTodas";
import ReceitasId from "../rotas/receitaId";
import ReceitaEditar from "../rotas/ReceitaEditar";
import ReceitasAddFav from "../rotas/ReceitaAddfav";
import ReceitaDelFav from "../rotas/ReceitasDellFav";

import ComentarioCriar from "../rotas/comentarioCriar";
import ComentarioEditar from "../rotas/comentarioEditar";

import RespostaCriar from "../rotas/rescriar";
import RespostaEditar from "../rotas/resEditar";
import RespostaPopular from "../rotas/Respopular";

import Deletes from "../rotas/deletes";

import Upload from "../rotas/upload";

import { Routes, Route, Link } from "react-router-dom";

import ComentarioBuscar from "../rotas/comentatiobusca";

function HomePage() {
  return (
    <>
      <h1> API Projeto 3 "GTR - Gestao do Trabalho Remoto" Documentação</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginRight: "30px",
            borderRight: "2px gray solid",
            paddingRight: "10px",
          }}
        >
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/grupo" element={<Grupo />} />

            <Route path="/schema/user" element={<SchemaUser />} />
            <Route path="/schema/task" element={<SchemaTask />} />
            <Route path="/schema/report" element={<SchemaReport />} />
            <Route path="/schema/log" element={<SchemaLog />} />
            <Route path="/schema/chatbot" element={<SchemaChatbot />} />

            <Route path="/rotas/usuario/signup" element={<SignUp />} />
            <Route path="/rotas/usuario/login" element={<LogIn />} />
            <Route path="/rotas/usuario/editar" element={<UsuarioEditar />} />
            <Route path="/rotas/usuario/id" element={<UsuarioId />} />
            <Route path="/rotas/usuario/todos" element={<Usuariotodos />} />
            <Route path="/rotas/usuario/logado" element={<UsuarioLogado />} />

            <Route path="/rotas/receita/criar" element={<ReceitasCriar />} />
            <Route path="/rotas/receita/todas" element={<ReceitasTodas />} />
            <Route path="/rotas/receita/buscar/id" element={<ReceitasId />} />
            <Route path="/rotas/receita/editar" element={<ReceitaEditar />} />
            <Route
              path="/rotas/receita/favoritos/adicionar"
              element={<ReceitasAddFav />}
            />
            <Route
              path="/rotas/receita/favoritos/excluir"
              element={<ReceitaDelFav />}
            />
            <Route
              path="/rotas/comentario/criar"
              element={<ComentarioCriar />}
            />
            <Route
              path="/rotas/comentario/editar"
              element={<ComentarioEditar />}
            />
            <Route
              path="/rotas/comentario/buscar"
              element={<ComentarioBuscar />}
            />
            <Route path="/rotas/resposta/criar" element={<RespostaCriar />} />
            <Route path="/rotas/resposta/editar" element={<RespostaEditar />} />
            <Route
              path="/rotas/resposta/buscar"
              element={<RespostaPopular />}
            />
            <Route path="/rotas/delete" element={<Deletes />} />
            <Route path="/rotas/upload" element={<Upload />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default HomePage;
