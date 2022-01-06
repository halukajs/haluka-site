/**
* Haluka HTTP Controller
* 
* Made using Haluka CLI Controller Generator
* 
*/
'use strict';


const { Controller } = require("@haluka/routing")
const Docs = require('../Model/Docs')

class DocsController extends Controller
{
    index ({res})
    {   
        let version = '2.0',
	        topic = 'installation'

	    res.redirect(`/docs/${version}/${topic}`)
    }

    viewer ({req, res}) {
    
        let version = req.params.version
        let topic 	= req.params.topic

        if (!topic)
            return res.redirect(`/docs/${version}/installation`)

        Docs.load(version, topic)
            .then((docsData) => {
                res.render('docs', {
                    title: docsData.title + ' - Haluka Framework',
                    data: docsData.html
                })
            })
            .catch((err) => {
                next(error(404))
            })
    }
    
}

exports.default = DocsController;