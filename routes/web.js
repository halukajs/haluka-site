'use strict'
let Route = exports.Route = new (require('@haluka/routing/build').Router)()

/**
 * @name WebRoutes
 * @desc Houses the routes for the application
 */

Route.get('/', 'Home.index')
Route.get('/getting-started', 'Home.gettingStarted')


Route.group({ prefix: 'docs' }, () => {

    Route.get('/', 'DocsController.index')
    Route.get('/:version/:topic?', 'DocsController.viewer')

})

