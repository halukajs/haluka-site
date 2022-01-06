# Installation

*   [Server Requirements](#serverrequirements)
*   [Installing Haluka](#installinghaluka)
*   [Development Server](#developmentserver)


Getting up and ready with Haluka is as easy as taking a sip of coffee. It's only a matter of few minutes before you take-off.


## Server Requirements

You need to make sure that the machine on which Haluka is going to be installed has following installed:

*   Node.js >= 7.0
*   npm >= 6.4

## Installing Haluka


### Via Haluka CLI 

Haluka CLI is a tool that helps in scaffolding of necessary files throughout the project.

    $ npm install -g haluka-cli

Once installed, you may use `haluka new` command to create a fresh installation.

    $ haluka new myproject
    $ cd myproject
Then, install the dependencies:

	$ npm install

### Via Git

You may also install Haluka using `git` to fetch the blueprint.
```shell
$ git clone --dissociate --depth=1 https://github.com/halukajs/haluka-app myproject
$ cd myproject
```

When cloning from `git`, you will need to create `.env` environment file. For the sake of easiness, an example file already exists as `.env.example`. Inside the project directory, following command can be used to copy and create your .env file with default environment settings.

```shell
$ cp .env.example .env
```
After cloning the app, install all the dependencies by running :

```shell
$ npm install
```

## Development Server

Once the installation is over, you may use following command to start the development server.

    $ haluka serve

or,

	$ npm run start

It starts HTTP Server on port specified in `.env` file. The default port is `3000`. You may now see your application at [`http://localhost:3000`](http://localhost:3000)`.


For more about `serve` command, please check <a href="/cli">Haluka CLI Docs</a>.
