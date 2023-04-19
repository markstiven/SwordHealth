const amqp = require('amqplib');

async function connect() {
  try {
        const username = process.env.RABBIT_USERNAME
        const password = process.env.RABBIT_PASSWORD
        const port = process.env.RABBIT_PORT
        const uri = `amqp://${username}:${password}@localhost:${port}/`
        const connection = await amqp.connect(uri)

        console.log("conexão RabbitMq estabelecida com sucesso")

        return connection

  } catch (ex) {
    console.error(ex)
  }
}

module.exports = connect()