import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/transactions', async (req, res) => {
    const tables = await knex('transactions').select('*')

    return tables
  })
}
