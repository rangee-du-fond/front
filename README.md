## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a
component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other
computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses
[sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so
that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise
compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to
requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Recommandations

you'll need to follow
[gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) practices in
order to participate to this project

## Tests

tests are run with [cypress](https://www.cypress.io)

to run tests run

```bash
npm run test
```

tests are run each time you push to the git repository

## Deploying

app deployed with netlify

staging version is deployed automatically when develop branch is updated  
https://trusting-volhard-5aeb7b.netlify.com/

production version is deployed automatically when master branch is updated  
https://dazzling-franklin-711232.netlify.com/

Note: don't forget to change the api url in src/apis/conf.js when deploying to a different
environnement
