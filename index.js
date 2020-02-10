require('dotenv').config()
const { PrismaClient } = require('@prisma/client')

exports.handler = async (event, context) => {
  const db = new PrismaClient()
  const orgs = await db.categories.findMany()
  db.disconnect()
  return {
    statusCode: 200,
    body: JSON.stringify(orgs),
  }
}
