## Check Typings for your Project

```sh
npm install get-matching-types -g
```

`cd` to an NPM project, then run `get-matching-types`:

```sh
 ~/d/p/a/j/metaphysics $ get-matching-types

Starting search for 44 deps.

found Typings for accounting
found Typings for babel-core
found Typings for basic-auth
found Typings for bluebird
found Typings for cors
found Typings for debug
found Typings for express
found Typings for express-graphql
found Typings for graphql
found Typings for jwt-simple
found Typings for lodash
found Typings for marked
found Typings for moment
found Typings for moment-timezone
found Typings for morgan
found Typings for numeral
found Typings for qs
found Typings for react
found Typings for request
found Typings for deep-equal
found Typings for mocha
found Typings for should
found Typings for should-promised
found Typings for sinon

You can install the following types:

$ npm install @types/accounting @types/babel-core @types/basic-auth @types/bluebird @types/cors @types/debug @types/express @types/express-graphql @types/graphql @types/jwt-simple @types/lodash @types/marked @types/moment @types/moment-timezone @types/morgan @types/numeral @types/qs @types/react @types/request @types/deep-equal @types/mocha @types/should @types/should-promised @types/sinon --save --only=dev
```

You can then copy & paste the command in to add typing data to your project 👍

---

This is probably a dupe ( at least, `flow-typed install` actually does this by default )
however, this is a quick command line app that will make a list of all potential type definitions
that exist in NPM for your dependencies

---

Want to play around?

```sh
git clone https://github.com/orta/get-matching-types
cd get-matching-types
npm install

# This uses Typings for Fetch's type-definitions
npm install typings --global
typings install
```
