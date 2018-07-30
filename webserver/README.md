# Webserver

This application demonstrates how to set up an express webserver to serve
up a static website. 

## View Engine
The view engine used is called 'hbs', but their are many other ones that can be used.

## Partials
The 'hbs' module allows us to register partials (like a header and footer), so that
we can inject the contents of those partials into any hbs file.

## Helpers
We defined two helper functions (getCurrentYear, screamIt) that we registered with
the hbs module. This allows us to call these functions in our hbs files with some
data.

## Middleware
An express application is essentially a series of middleware function calls.
Middleware functions have access to the request object, the response object, and
the next middleware function in the applications request-response cycle.
Middleware functions can execute any code, make changes to the request and response
objects, end the request-response cycle, or call the next middleware function in the
stack. We can bind middleware to our express app by using `app.use()`. Then, every
time the app receives a request, the middleware function is called.

We defined middleware to:

  - render a maintanence page
  - serve our public folder
  - log all incoming requests to a server.log file