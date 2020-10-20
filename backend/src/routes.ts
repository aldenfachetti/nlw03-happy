import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";

//Troca app.(metodo HTTP) pelo routes
const routes = Router();

const upload = multer(uploadConfig);

//Busca(Lista) Orfanatos
routes.get("/orphanages", OrphanagesController.index);

//Busca(1 único Orfanato) Orfanato
routes.get("/orphanages/:id", OrphanagesController.show);

//Cria Orfanatos
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

export default routes;

//RestAPI

//Rota = Conjunto
//Recurso = Usuário

//Métodos HTTP = GET, POST, PUT, DELETE
//Parâmetros =
//Query Params: http://localhost:3333/users/?search=alden&page=2
//Route Params: http://localhost:3333/users/1 (identificar um recurso)
//Body: http://localhost:3333/users

//GET = Buscar uma informação (lista, item, etc)
//POST = Criando uma informação
//PUT = Editado uma informação
//DELETE = Deletando uma informação
