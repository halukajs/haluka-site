'use strict'

const Application = require('@haluka/core/build/src/Application/Application').default
/**
 * Creating the Haluka Application which acts as the backbone for the framework
 */
let app = Application.getInstance(require('path').resolve(__dirname, '../'));

 /**
 * Load Event Handlers
 */
require('./events');

// in helpers file in newer versions; IGNORE LOL
global.ucfirst = (str) => (str.charAt(0).toUpperCase() + str.slice(1))

/**
 * Boot Haluka
 */
let appData = require(app.appPath('app.js'));
app.boot(appData)