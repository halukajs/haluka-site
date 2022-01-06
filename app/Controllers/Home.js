const { Controller } = require("@haluka/routing")

class Home extends Controller{

    index ({res}) {
        res.render('home', {
            title: 'Haluka - A lightweight node.js web framework designed for web crafters!'
        })
    }

    gettingStarted ({res}) {
        res.render('getting-started', {
            title: 'Getting Started - Haluka Framework'
        })
    }

}

exports.default = Home