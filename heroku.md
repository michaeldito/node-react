# Heroku

1. Download the CLI 
> https://devcenter.heroku.com/articles/heroku-cli
2. Run help
> heroku --help
3. Login
> heroku login
4. Add An ssh-key
> heroku keys:add
5. Check your key
> heroku keys
6. Check your connection
> ssh -v git@heroku.com
7. Make sure your port is dynamic in server.js
> const port = process.env.PORT || 3000;
8. Specify a start script in package.json
> "start" : "node server/server.js"
9. Specify your version of Node
>  "engines": {
>    "node": "8.4.0"
>  },
10. Make your new Heroku app
> heroku create
11. Push to Heroku
> git push heroku
12. Open your app in your browser
> heroku open