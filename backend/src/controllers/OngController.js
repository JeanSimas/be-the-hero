const crypto = require('crypto')

const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        })

        return response.status(201).json({ id })
    },
    async index(request, response) {
        try {
            const ongs = await connection('ongs').select('*')
            response.json(ongs)
        } catch (error) {
            console.log(error)

            response.status(500).send('Server Error')
        }

    }
}