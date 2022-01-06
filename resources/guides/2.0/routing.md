# Routing

* [Route Pointing](#routepointing)
	* [Basic Controller](#basiccontroller)
	* [Route Definition](#routedefinition)


**Routing** refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

So, routes are the gateway for users to interract with your applications. These routes are registered in a separate file to have easier and maintainable codebase. 

Routes are registered in `routes/web.js` file.

## Route Pointing

You will begin by defining routes in your `routes/web.js` file. The routes defined in the file point the route to the defined controller. The Controller then serves the route to the user.

```js
Route.point('/user', to('user'))
```

The above code points `/user` route to `user` controller which should be created at `app/Controllers` directory. So, on navigating to `http://your.app/user`, `app/Controllers/user.js` file gets served to the user. 

### Basic Controller

Haluka CLI can be used to create a basic controller. For the above route to work, we need to create a `user` controller. For this, following command can be used.
```bash
$ haluka make:controller user
```

This command creates a new file at `app/Controllers/user.js` which contains a basic route definition.

Now, you can see some content when you navigate to your `/user` route.
<hr>

### Route Definition
Route definition takes the following structure:

```js
router.METHOD(PATH, HANDLER)
```
Where:

* **router** is an instance of `express.Router`. 
* **METHOD** is an HTTP request method, in lowercase.
* **PATH** is a relative path from path used in Route Pointer.
* **HANDLER** is the function executed when the route is matched.

> `router` variable is already declared in `routes/web.js` by using `Route` provider.

> **Path** to be used is relative path from the path used in Route Pointer. <br/>
> Example: <br>
> For ```Route.point('/user', to('user'))``` <br>
> In `user` Controller: <br>
> ```router.get('/', function (req, res) {... })``` is served on `user/` route and <br>
> ```router.get('/profile', function (req, res) {... })``` is served on `user/profile` route.

The following examples illustrate defining simple route definitions.

####Respond with Hello World!
```js
router.get('/', function (req, res) {
  res.send('Hello World!')
})
```


####Respond to POST request
```js
router.post('/', function (req, res) {
  res.send('Got a POST request')
})
```


####Respond to a PUT request
```js
router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```


####Respond to a DELETE request
```js
router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

> For more about controllers, see [Controllers](controllers) section.
