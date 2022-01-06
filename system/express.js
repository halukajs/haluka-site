
const FactoryExpressDispatcher = require('@haluka/express-dispatcher').default
const express = require('express')

class ExpressDispatcher extends FactoryExpressDispatcher {

    create () {
        let app = super.create()
        app.use(express.static('public'))
        app.set('views', use('app').resourcesPath('views'))

        // using express-edge as render engine
        const { config, engine } = require('express-edge')
        // Configure Edge if need to
        config({ cache: process.env.NODE_ENV === 'production' })
        // Automatically sets view engine and adds dot notation to app.render
        app.use(engine)
        
        return app
    }

    onRequest(req, res) {
        use('Events').fire('Server.RequestReceived', req, res)
    }
    
}

exports.default = ExpressDispatcher