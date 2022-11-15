const {validationResult}= require("express-validator")
const mainController= {
    login: (req, res) =>
    {
        res.render("login", {
            nombre: req.session.nombre,
            color: req.session.color,
            email: req.session.email,
            edad: req.session.edad,
        })
    },
    store: (req, res) =>
    {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.send(errors.array())
        }
        req.session.nombre = req.body.nombre;
        req.session.color = req.body.color;
        req.session.email = req.body.email;
        req.session.edad = req.body.edad;

        res.redirect("/")
    },

}


module.exports = mainController