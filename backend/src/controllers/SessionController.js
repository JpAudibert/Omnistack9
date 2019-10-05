const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email } = req.body

        // USAR ISSO AQUI, É MUITO ÚTIL
        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({ email })
        }

        return res.json(user)
    },

    async index(req, res) {
        const users = await User.find()

        return res.json(users)
    }

}