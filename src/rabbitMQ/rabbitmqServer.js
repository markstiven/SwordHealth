

const connect = require('../config/rabbitMQ')

exports.createRowActivity = async function(message){
    try {
        const connection = await connect
        const channel = await connection.createChannel()
        const queue = 'activity'
        await channel.assertQueue(queue)
        channel.sendToQueue(queue, Buffer.from(message))
        
    } catch (error) {
        throw error   
    }
}

exports.notifyActivity = async function() {
    try {
        const connection = await connect
        const channel = await connection.createChannel()
        const queue = 'activity'
        await channel.assertQueue(queue)

        const message = await consumeMessage(channel, queue);
        if (message) {
            return message;
        } else {
            throw 'Mensagem vazia'
        }
    } catch (error) {
      throw error
    }
}

const consumeMessage = async (channel, queue) => {
    const message = await channel.get(queue);
    if (message) {
        const content = message.content.toString();
        console.log(`Mensagem recebida: ${content}`);
        return content;
    }
}