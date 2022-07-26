//Importações
const express = require('express')
const router = express.Router()
const controller = require('../controller/dicasController')


//Rotas
router.get("/listarDicas", controller.allDicas)
router.post("/dica", controller.createDica)
router.get("/dicas/cidade", controller.dicasByCidade)
// router.get("/listaDicas/estado", controller.dicasByEstado)
// router.patch("/attdica/:id", controller.updateDicas)
// router.delete("/deleteDica/:id", controller.deleteCoach)

module.exports = router