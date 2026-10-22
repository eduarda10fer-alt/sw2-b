const User = require('../models/User')

module.exports = class UserController {
    static async register(req, res) {
        const displayName = req.body.displayName
        const email = req.body.email
        const password = req.body.password
        const photoUrl = req.body.photoUrl

        if (!displayName) {
            res.status(422).json({
                message: 'O nome é obrigatorio.'
            })
        }
        if (!email) {
            res.status(422).json({
                message: 'O email é obrigatorio.'
            })
        }
        if (!password) {
            res.status(422).json({
                message: 'O password é obrigatorio.'
            })
        }
    }
}