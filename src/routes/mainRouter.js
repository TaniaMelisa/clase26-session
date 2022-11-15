
const express = require("express")
const {body}= require("express-validator")

const mainController = require ("../controllers/mainController")

const validator = [
    body("nombre").notEmpty().withMessage("no puede ser nulo"),
    body("color").notEmpty().withMessage("debe elegir un color"),
    body("email").isEmail().withMessage("debe ingrear un email valido"),
    body("edad").custom(value => {
        if(isNaN(value)){
            throw new Error("el valor ingresado debe ser un numero")
        } else {
            return true
        }
    })
]


const router = express.Router()

router.get("/", mainController.login )
router.post("/", validator, mainController.store )



module.exports = router