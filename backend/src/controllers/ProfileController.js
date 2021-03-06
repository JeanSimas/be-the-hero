const connection = require('../database/connection')


module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization

        try {
            const incidents = await connection('incidents')
                .where('ong_id', ong_id)
                .select('*')

            return response.json(incidents)
        } catch (error) {
            console.log(error)
            return response.status(500).send('Server Error')
        }
    }
}