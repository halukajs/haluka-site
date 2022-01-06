/**
 * @name Docs
 * @author Robin Panta <hacktivistic@gmail.com>
 */
'use strict'

var Docs = module.exports = {}

var titles = {

	'about'					: 'About Haluka',
	'contribution-guide'	: 'Contribution Guide',
	'installation'			: 'Installaion',
	'directory-structure'	: 'Directory Structure',
	'configuration'			: 'Configuration',
	'request-lifecycle'		: 'Request Lifecycle',
	'container'				: 'IoC Container',
	'service-providers'		: 'Service Providers',
	'events-architecture'	: 'Events',
	'routing'				: 'Routing',
	'middleware'			: 'Middleware',
	'controllers'			: 'Controllers',
	'views'					: 'Views',
	'errors'				: 'Error Handling',
	'session'				: 'Session',
	'logging'				: 'Logging',
	'security'				: 'Security',
	'authentication'		: 'Authentication',
	'database'				: 'Database',
	'migrations'			: 'Migrations',
	'seeding'				: 'Seeding',
	'cli'					: 'Haluka CLI Toolkit',
	'events'				: 'Events',
}

const path = require('path');

Docs.load = async function (version, topic) {
	
	var file = path.join(__dirname, '../../resources/guides', version, `${topic}.md`)

	return new Promise((resolve, reject) => {
		require('fs').readFile(file, (err, data) => {
			if (err) return reject(err)
			var showdown  = new (require('showdown').Converter)({
				tables: true
			})
			resolve({
				title: titles[topic] || 'Documentation',
				html: showdown.makeHtml(data.toString())
			})
		})
	})
	
	
}
