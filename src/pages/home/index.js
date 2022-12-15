//Topicos principais
import Principal from "../principal";
import Grupo from "../grupo/index";
import Mer from "../mer/index";

//Schema
import SchemaUser from "../Schemas/user";
import SchemaTask from "../Schemas/task";
import SchemaReport from "../Schemas/report";
import SchemaLog from "../Schemas/log";
import SchemaActivity from "../Schemas/activity";

//Navbar
import NavBar from "../../components/Navbar";

//Login e signUp
import SignUp from "../rotas/signUp";
import LogIn from "../rotas/login";

//User
import UsuarioEdit from "../rotas/userEdit";
import UsuarioId from "../rotas/userId";
import Usuariotodos from "../rotas/userAll";
import UsuarioLogado from "../rotas/userLogged";
import UserCreate from "../rotas/userCreate";

//Task
import TaskNew from "../rotas/taskNew";
import TaskWorkedHours from "../rotas/taskWorkedHours";
import TaskOutOfTime from "../rotas/taskOutOfTime";
import TaskStatus from "../rotas/taskStatus";

//Report
import ReportNew from "../rotas/reportNew";
import ReportAll from "../rotas/reportAll";
import ReportGetOne from "../rotas/reportGetOne";
import ReportEditOne from "../rotas/reportEditOne";

import { Routes, Route, Link } from "react-router-dom";

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

            <Route path="/mer" element={<Mer />} />

            <Route path="/schema/user" element={<SchemaUser />} />
            <Route path="/schema/task" element={<SchemaTask />} />
            <Route path="/schema/report" element={<SchemaReport />} />
            <Route path="/schema/log" element={<SchemaLog />} />
            <Route path="/schema/activity" element={<SchemaActivity />} />

            <Route path="/rotas/usuario/signup" element={<SignUp />} />
            <Route path="/rotas/usuario/login" element={<LogIn />} />
            <Route path="/rotas/usuario/create" element={<UserCreate />} />
            <Route path="/rotas/usuario/edit" element={<UsuarioEdit />} />
            <Route path="/rotas/usuario/id" element={<UsuarioId />} />
            <Route path="/rotas/usuario/all" element={<Usuariotodos />} />
            <Route path="/rotas/usuario/logado" element={<UsuarioLogado />} />

            <Route path="/rotas/task/new" element={<TaskNew />} />
            <Route
              path="/rotas/task/workedhours"
              element={<TaskWorkedHours />}
            />
            <Route path="/rotas/task/outoftime" element={<TaskOutOfTime />} />
            <Route path="/rotas/task/status" element={<TaskStatus />} />

            <Route path="/rotas/report/new" element={<ReportNew />} />
            <Route path="/rotas/report/all" element={<ReportAll />} />
            <Route path="/rotas/report/getone" element={<ReportGetOne />} />

            {/*             <Route
              path="/rotas/report/workedhours"
              element={<ReportWorkedHours />}
            /> */}
            {/*             <Route
              path="/rotas/report/outoftime"
              element={<ReportOutOfTime />}
            />
            <Route path="/rotas/report/all" element={<ReportAll />} /> */}

            {/*             <Route path="/rotas/report/new" element={<ReportNew />} />
            <Route path="/rotas/report/new" element={<ReportNew />} /> */}

            {/*             <Route path="/rotas/receita/criar" element={<ReceitasCriar />} />
            <Route path="/rotas/receita/todas" element={<ReceitasTodas />} />
            <Route path="/rotas/receita/buscar/id" element={<ReceitasId />} />
            <Route path="/rotas/receita/editar" element={<ReceitaEditar />} /> */}
            {/*           <Route
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
            <Route path="/rotas/upload" element={<Upload />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default HomePage;
