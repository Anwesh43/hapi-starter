const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.server({
        port : 3000
    })
    server.route({
        method : 'GET',
        path : '/hello',
        handler(request, h) {
            return "hello world"
        }
    })
    await server.start()
    console.log('starting the server')
}

process.on('unhandledRejection', (err) => {
    console.log('unhandled error')
    console.log(err)
})
init()
