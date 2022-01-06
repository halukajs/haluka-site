# Directory Structure

*   [.env](#env)
*   [App Directory](#appdirectory)
*   [Config Directory](#configdirectory)
*   [Public Directory](#publicdirectory)
*   [Resources Directory](#resourcesdirectory)
*   [Routes Directory](#routesdirectory)
*   [Storage Directory](#storagedirectory)
*   [System Directory](#systemdirectory)
*   [Test Directory](#testdirectory)
*   [Haluka Packages Directory](#halukapackagesdirectory)

It may feel overwhelming at first glance, but trust me, it's going to get super easy when you get the hand of it.

## .env
Haluka provides you with environment configuration based on `dotenv` package. You can add or changes environment values in this file and this value can be accessed using `Env` service provider by code:
```js
const env = use('Env')
env.get('KEY', 'FALLBACK_VALUE')
```

## App Directory

`app` directory in the root directory is the directory that houses all of your **application logic**. This directory contains a basic structure for putting your application files. You may create and use more directorys as per your requirements.

### app.js
`app.js` file contains the **necessary providers and middlewares** that are to be registered while booting up the framework. This file also hosts aliases for providers and named middlewares. When you want to register a new service provider, this can be done in this file in `providers` section.

### Controllers
`Controllers` directory houses all your **route controllers**. Almost all the logic to handle the HTTP requests entering into your application shall be placed in this directory.

### Events
`Events` directory houses your **event handlers**. Events may be used to alert other parts of your application that a given action has occurred, providing a great deal of flexibility and decoupling.

### Model
`Model` directory houses your **application models**. The word "Model" is ambiguous since it means many different things to many different people. Some developers refer to an application's "Model" as the totality of all of its business logic, while others refer to "Model" as classes that interact with a relational database. Any way you think, this directory is created by default for putting whatever you think a "Model" may be. You may create a different directory structure as you may deem fit as per your usage and meaning.


## Config Directory
`config` directory contains all the pre-configured config files that are used by the application. You can freely change the config files as per your application's requirements. All the config files and their values are properly documented in their respective files so take your time to check that out.
Config values can be accessed using `Config` provider.
```js
const Config = use(`Env`)
Config.get('filename.key.subkey', 'fallback_value')
```

## Public Directory
`public` directory is used by default for serving the **static file** for the application. Any file in this directory can be directly accessed by entering the url: `http://hostname/path`

Alternatively, any other directory too can be used for serving static files. The default directory can be changed by changing the value of `static` property in `express` config file in `Config` difectory.

## Resources Directory
`resources` directory contains your application's resources like views, static assets, raw and uncompiled assets like LESS/SASS files, uncompiled javascript and even images and other similar files. Inside this directory, contains `views` directory which is used as default views directory.

## Routes Directory
`roots` directory contains all of the route definitions for your application. By default,`web.js` file exists which contains route pointers to point the route to a specific controller.

## Storage Directory
`storage` directory is like a **warehouse** for the application. You may use this directory as you see fit or may not even use it. Usually, it is a good idea to store logs, session files and other intermediate files in this directory.

## System Directory
`system` directory contains files which **help in bootstrapping** the framework. This directory may also house any other files which may be necessary to run your application. You may add some hooks to your application in this directory and import it in the `Application_Booted` or `Express.Bootstrapped` event listener.

## Test Directory
`test` directory contains your automated tests. An example test is provided out of the box. You may run your tests using `npm run test` command.

## Haluka Packages Directory
`haluka_packages` directory contains packages plugged from [JSAxe Package Manager](https://japm.jsaxe.com)
