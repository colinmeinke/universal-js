# UniversalJS

A universal Javascript starter kit inc. React, Redux,
Redux Dev Tools, Universal Redux Router, CSS Modules,
hot module reloading, Babel for ES2015+ and ESLint.

## Demonstrates

- [Flux](https://facebook.github.io/flux) using
  [Redux](http://redux.js.org)
- [Redux Dev Tools](https://github.com/gaearon/redux-devtools)
- Routing using
  [Universal Redux Router](https://github.com/colinmeinke/universal-redux-router)
- Server rendering
- Progressive enhancement
- Hot module reloading*
- [CSS Modules](https://github.com/css-modules/css-modules)
- Style themes
- Testing Redux and React components
- Bundling using [Webpack](https://webpack.github.io) with
  [Babel](https://babeljs.io)
- Enforcing coding style with [ESLint](http://eslint.org)

\**Currently not working with pure function components.*

[Read more about the reasoning behind these decisions](#terms-concepts-and-reasoning).

Although this setup is far from simple or minimal, I have
purposefully avoided all but what I see as core for a large
project. For example, authentication and data fetching is
outside the scope of this starter kit.

## Usage

```
mkdir new-project; cd new-project
git clone git@github.com:colinmeinke/universal-js.git .
npm install
npm run build:dev
npm run start:dev
```

## Structure

### Entry points

The `/src` directory is where all of the code for the app
lives.

The build process `npm run build:dev` or `npm run build:pro`
will compile this code and output it into the `/dist`
directory.

Files that will be directly requested by the browser are then
copied into their appropriate directory within `/static`.

There are two files in the root of the `/src` directory:

1. `server.js`
2. `client.js`

These two files are the entry points into the app for their
respective environments.

`server.js` will listen for HTTP requests sent from a client
to the server. On receiving a request it will render the
response on the server and send it back to the client to
display.

`client.js` will kick in *if* Javascript is enabled and
initialises in the browser. This will *hydrate* the app on the
client, and thereafter handle requests itself, removing the
need for additional requests to the server.

### Shared code

The `/src/common` directory is where all of the shared code
lives for both server and client. This is the beauty of
universal Javascript – shared code.

Within are three directories for Redux
[actions](http://redux.js.org/docs/basics/Actions.html),
[reducers](http://redux.js.org/docs/basics/Reducers.html) and
[store configuration](http://redux.js.org/docs/basics/Store.html) –
`/actions`, `/reducers`, `/store`.

### Components

The `/components` directory also resides within the `/common`
directory. This is where all React components live. Both
presentational and container (those that connect to the Redux
store or have access to its dispatch method).

Each presentational component lives within its own
directory within `/components`. The directory is named after
the component in question, e.g. `<Button />` would be:
`/components/Button/...`.

Connecting components to the Redux store is done by adding a
file to the root of the `/components` directory. This file is
also named after the component, e.g. `/components/Button.js`.

This structure means that all components can be imported into
any file as follows:

```js
import Button from './components/Button';
```

The file importing the component does not need to know if it
is a presentational or a container component.

This is because of how imports resolve. It will first look
for a file within the `/components` directory called
`Button.js`. If that does not exist, it will then look for the
`index.js` file within a directory called `/Button`.

```
|-- common
    |-- components
        |-- Button
            |-- index.js
            |-- core.css
        |-- Button.js
```

## Terms, concepts and reasoning

### Progressive enhancement

> I get worried when I see very complex things getting built,
> things that are reliant of JavaScript. While its true that
> very few people are going to turn off JavaScript, the
> JavaScript can still fail. That can be okay if you're
> building in the right way. It will fall back to what's
> underneath the JavaScript.
>
> \- Jeremy Keith

### Server-side rendering

If [progressive enhancement](#progressive-enhancement) is an
aim, then we must provide the core experience of our app to
users who have disabled Javascript in their browser, or
situations where client-side Javascript has failed.

This necessitates that we render the same app on the server
as we might on the client. The response from the server should
be usable regardless of whether the client-side Javascript
kicks in. That's just a bonus!

Server-side rendering isn't just about progressive enhancement
and accessibility. It's also a huge win for performance and
SEO.

### Universal Javascript

If we are rendering the same experience on both
[the server](#server-side-rendering) and the client, then it
follows that we should use the same language to build both.

When we use the same language for everything, it means we can
abstract common code and share it between environments. Huge
wins for maintainability, testing, cognitive load ... the list
goes on and on.

### NodeJS

[NodeJS](https://nodejs.org) makes
[universal Javascript](#universal-javascript) possible by
running Javascript on the server.

### Express

[Express](http://expressjs.com) runs in a
[NodeJS environment](#nodejs) and makes it easy to handle HTTP
requests to the server and send a response.

### React

At its core, this is a
[React](https://facebook.github.io/react) app. React is how we
write our components, render the user interface and keep it in
sync with the *state* of the app.

React also makes
[rendering on the server](#server-side-rendering) really easy.

### Flux

We need a way to manage the *state* of our React components.
[Flux](https://facebook.github.io/flux) is a
pattern that can be used to architect how state flows
through our app and how we update state.

However, Flux itself is only an idea. You can't download or
install it.

### Redux

Redux is a [Flux](#flux) implementation. It *is* a library
that you can download or install.

It's beautifully simple and stores all app state in a single
object.

It allows us to treat our user interface as a pure function,
which when passed identical state will always render identical
output.

It also allows our state to be serializable, and therefore
storable or shareable. This makes the possibility of things
like undo, redo, debugging and cross-device syncing very
achievable.

### Universal Redux Router

[Universal Redux Router](https://github.com/colinmeinke/universal-redux-router)
is a tiny library I built to work with [Redux](#redux).

It essentially just stores `url` as part of the Redux state.

### CSS Modules

As much as I love working with
[inline styles](https://facebook.github.io/react/tips/inline-styles.html),
and using the power of Javascript to output styles, there is
[a lot](https://youtu.be/zR1lOuyQEt8) to
[be said](http://glenmaddern.com/articles/css-modules) for
[CSS Modules](https://github.com/css-modules/css-modules).

CSS Modules allow you to write CSS that is locally scoped.
This means that a CSS file can use the same class names that
are in another CSS file without worrying about clashing. When
the CSS is output, each class gets a unique hash – no need to
rely on long-winded naming conventions like
[BEM](https://en.bem.info).

Most importantly for me is that you can extract the CSS
written this way into an external style sheet. This means you
still get styling even *if* Javascript fails on the client.

A downside for me was getting CSS Modules setup in the first
place to work how I wanted. For more comprehensive
documentation on how to setup CSS modules with Webpack, check
out
[another repository of mine that describes exactly that](https://github.com/colinmeinke/css-modules-universal-example).

### PostCSS

[PostCSS](https://github.com/postcss/postcss) is a
preprocesser, a bit like [Sass](http://sass-lang.com) or
[Less](http://lesscss.org). The difference is it works on a
plugin system.

With the right plugins installed PostCSS allows you to write
future CSS, and compile it to something that works on today's
browsers. This is its major strength for me – you can just
write CSS.

### CSS themes

If we write all user interface as components, all of our CSS
can be split by component too.

I like to allow theming, giving each presentational component
a `core.css` file and then overriding those styles with a
`${theme-name}-theme.css` file.

`core.css` typically contains base layout rules and a very
simple grayscale color palette.

### ES2015+

The Javascript features and syntax used within this repository
follows the
[ES2015](http://www.ecma-international.org/ecma-262/6.0) spec.

### Babel

The reason we don't have to care about browser support for the
Javascript features and syntax we write, is because
[Babel](https://babeljs.io) takes care of transpiling our
code to ES5. ES5 works on all modern browsers.

### Build process

All build tasks are run using the surprisingly powerful
[scripts property](https://docs.npmjs.com/misc/scripts) built
into [npm](https://www.npmjs.com).

Everything that can be done on the command line, can be done
with scripts.

Here's a list of the some of the scripts I have setup:

- `npm run build:dev` – build to run in a development
  environment.
- `npm run build:pro` – build to run in a production
  environment.
- `npm run changelog` – create or update a changelog.
- `npm run commit` – create a
  [conventional commit message](#commitizen).
- `npm run lint` – lint the code.
- `npm run start:dev` – start the server in a development
  environment.
- `npm run start:pro` – start the server in a production
  environment.
- `npm run test` – run the tests.

### Webpack

[Webpack](https://webpack.github.io) is the powerhouse behind
the build scripts `npm run build:dev` and `npm run build:pro`.

Webpack takes a Javascript file as an entry point. It runs
through that file's dependencies, and its dependents'
dependencies, *bundling* all that code into an output file.

In your Webpack config, you can tell Webpack to run various
*loaders* on specific file types during bundle-time. For
example, in this case we run all our Javascript files through
the [Babel](#babel) loader to convert our [ES2015+](#es2015)
features and syntax to regular ES5.

Loaders can be chained together, which can be very powerful.

For more information, check out the section on
[entry points](#entry-points) above.

### Hot module reloading

Part of a great development environment is not having to
manually recompile your code and refresh your browser every
time you make a change to your Javascript or CSS.

[Hot module reloading](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack)
solves this.

Currently hot module reloading is not working on this
repository, whilst a
[solution is found](https://github.com/gaearon/babel-plugin-react-transform/issues/57)
to get it working with React pure function components.

### ESLint

Maintaining a consistent coding style is important, especially
when there is more than one contributor.

`npm run lint` will run ESLint on the Javascript using my
[spaced config](https://github.com/colinmeinke/eslint-config-spaced)
rules, an extension of
[Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

### Commitizen

[Commitizen](https://commitizen.github.io/cz-cli) helps us
write
[conventional commit messages](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).
When commiting code, instead of `git commit -m "..."` type
`npm run commit`.

This guides us through the process of writing a conventional
commit message by prompting us for various data about the
changes we have made.

As well as maintaining consistent commit messages across the
project, this can have other extremely useful benefits.

There are libraries such as
[sematic release](https://github.com/semantic-release/semantic-release)
or
[conventional changelog](https://github.com/ajoslin/conventional-changelog)
that can understand the conventional commit message syntax and
run tasks based on that.

## Help make this better

[Issues](https://github.com/colinmeinke/universal-js/issues/new)
and pull requests gratefully received!

I'm also on twitter [@colinmeinke](https://twitter.com/colinmeinke).

Thanks :star2:

---

![Test status](https://img.shields.io/travis/colinmeinke/universal-js.svg)
