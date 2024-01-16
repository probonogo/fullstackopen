# fullstackopen-Course-and-testing

[Deploy Examples](https://probonogo.github.io/fullstackopen-Course-and-testing/)

- [fullstackopen-Course-and-testing](#fullstackopen-course-and-testing)
  - [Part 1. Introduction to React](#part-1-introduction-to-react)
    - [a. Introduction to React](#a-introduction-to-react)
      - [Resources](#resources)
    - [b. JavaScript](#b-javascript)
      - [Arrays](#arrays)
      - [Functions](#functions)
      - [Object methods and "this"](#object-methods-and-this)
      - [Classes](#classes)
      - [JavaScript materials](#javascript-materials)
      - [Resources](#resources-1)
    - [c. Component state, event handlers](#c-component-state-event-handlers)
      - [Resources](#resources-2)
    - [d. A more complex state, debugging React apps](#d-a-more-complex-state-debugging-react-apps)
      - [Complex state](#complex-state)
      - [Debugging React applications](#debugging-react-applications)
      - [Useful Reading](#useful-reading)
      - [Web programmers oath](#web-programmers-oath)
  - [Part 2. Communicating with server](#part-2-communicating-with-server)
    - [a. Rendering a collection, modules](#a-rendering-a-collection-modules)
      - [JavaScript Arrays](#javascript-arrays)
      - [Resources](#resources-3)
    - [b. Forms](#b-forms)
    - [c. Getting data from server](#c-getting-data-from-server)
      - [The browser as a runtime environment](#the-browser-as-a-runtime-environment)
      - [Resources](#resources-4)
    - [d. Altering data in server](#d-altering-data-in-server)
    - [e. Adding styles to React app](#e-adding-styles-to-react-app)
  - [Part 5. Testing React apps](#part-5-testing-react-apps)
    - [a. Login in frontend](#a-login-in-frontend)
    - [b. props.children and proptypes](#b-propschildren-and-proptypes)
    - [c. Testing React apps](#c-testing-react-apps)
    - [d. End to end testing](#d-end-to-end-testing)
  - [Part 6. Flux-architexture and Redux](#part-6-flux-architexture-and-redux)
    - [a. Flux-architecture and Redux](#a-flux-architecture-and-redux)
    - [b. Many Reducers](#b-many-reducers)
    - [c. Communicating with server in a redux application](#c-communicating-with-server-in-a-redux-application)
    - [d. React Query, useReducer and the context](#d-react-query-usereducer-and-the-context)
    - [Resources](#resources-5)
  - [Part 7. React router, custom hooks, styling app with CSS and webpack](#part-7-react-router-custom-hooks-styling-app-with-css-and-webpack)
    - [a. React Router (v5)](#a-react-router-v5)
    - [b. Custom hooks](#b-custom-hooks)
    - [Prototipo de hook para realizar peticiiones fetch con axios que se pueden usar en cualquier aplicación. Solo hay que actualizar `baseURL` y el `token`:](#prototipo-de-hook-para-realizar-peticiiones-fetch-con-axios-que-se-pueden-usar-en-cualquier-aplicación-solo-hay-que-actualizar-baseurl-y-el-token)
    - [c. React Bootstrap](#c-react-bootstrap)
    - [Material UI](#material-ui)
    - [Ejecutar un servidor local para archivos estáticos. Ejecutar este comando en el directorio con el index:](#ejecutar-un-servidor-local-para-archivos-estáticos-ejecutar-este-comando-en-el-directorio-con-el-index)
    - [Algunos comandos útiles](#algunos-comandos-útiles)
    - [Seguridad](#seguridad)
    - [Instalar y configurar prettier:](#instalar-y-configurar-prettier)
  - [Part 9. TypeScript](#part-9-typescript)
  - [Part 11. Continuous Integration / Continuous Delivery systems (CI/CD)](#part-11-continuous-integration--continuous-delivery-systems-cicd)
  - [Part 12. Containers](#part-12-containers)
  - [Part 12. Using relational databases](#part-12-using-relational-databases)

## Part 1. Introduction to React

### a. Introduction to React

```
npm create vite@latest
cd <install-dir>
npm install
npm run dev
```

---

- [Component](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/4d5737f7bf8f287840f0d867ba85863c85e5b0cf/part1/src/App.jsx)
- [Multiple components](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/e9c634b04c4a2e1766d1cf6a92a1b5701b62e66e/part1/src/App.jsx)
- [props: passing data to components](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/09b9ad36ffac4221bb18b038f192ade041d036a6/part1/src/App.jsx)
- [Possible error message](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/8b2c117b9ceaf98e7a1411243bbc5dea6a8a0303/part1/.eslintrc.cjs)
- [Do not render objects](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/fbcaf4f27694da6e5362a15654c4edea37f01bf6/part1/src/App.jsx)

---

#### Resources

- [Vite](https://vitejs.dev/guide/)
- [Babel](https://babeljs.io/repl/)
- [ESLint](https://eslint.org/)
- [react/prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md)
- [Fragments](https://react.dev/reference/react/Fragment)

### b. JavaScript

[Node.js](https://nodejs.org/en/) is a JavaScript runtime environment based on Google's [Chrome V8](https://developers.google.com/v8/) JavaScript engine and works practically anywhere - from servers to mobile phones. The latest versions of Node already understand the latest versions of JavaScript, so the code does not need to be transpiled.

#### Arrays

The contents of the array can be modified even though it is defined as a `const`. Because the array is an object, the variable always points to the same object. However, the content of the array changes as new items are added to it.

```js
const t = [1, -1, 3]
t.push(5) //[1, -1, 3, 5]
const t2 = t.concat(5) //t2 = [1, -1, 3, 5]

// destructuring assignment
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t
console.log(first, second) // 1, 2 is printed
console.log(rest) // [3, 4, 5] is printed

t.forEach((value) => {
  console.log(value) // numbers 1, -1, 3, 5 are printed, each on its own line
})

const m2 = t.map((value) => '<li>' + value + '</li>')
console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

#### Functions

```js
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1, 5)
console.log(result)

// If there is just a single parameter, we can exclude the parentheses from the definition:
const square = (p) => {
  console.log(p)
  return p * p

  // If the function only contains a single expression then the braces are not needed.
  const square = (p) => p * p

  const t = [1, 2, 3]
  const tSquared = t.map((p) => p * p)
  // tSquared is now [1, 4, 9]

  // There are two ways to reference the function; one is giving a name in a function declaration.
  function product(a, b) {
    return a * b
  }

  const result = product(2, 6)
  // result is now 12

  //The other way to define the function is by using a function expression.
  const average = function (a, b) {
    return (a + b) / 2
  }

  const result = average(2, 5)
  // result is now 3.5
}
```

#### Object methods and "this"

```js
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function () {
    console.log('hello, my name is ' + this.name)
  },

  doAddition: function (a, b) {
    console.log(a + b)
  },
}

arto.doAddition(1, 4) // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15) // 25 is printed
```

#### Classes

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
```

#### JavaScript materials

*https://fullstackopen.com/en/part1/java_script#classes*

- [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
- [javascript.info](https://javascript.info/)
- [book Eloquent JavaScript](https://eloquentjavascript.net/)
- [Namaste 🙏 JavaScript](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)

#### Resources

- [Chrome V8](https://developers.google.com/v8/)
- [Console JS Tools online](https://jsbin.com/?js,console)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Understand JavaScript's this Keyword in Depth](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth)
- [Classes in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### c. Component state, event handlers

---

- [Component helper functions](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/920470f1eae28ade3f0a6d42907ff7cb57fc9f02/part1/src/App.jsx)
- [Destructuring](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/b7e4742763ce970ec82bafef135cd89395bd394e/part1/src/App.jsx)
- [Stateful component](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/d604a05c73fb1da875c65805b1ccb4d5f17c5d47/part1/src/App.jsx)
- [Event handling](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/84ba39ba632ad03cccbe47a4b4ff3e172b91c920/part1/src/App.jsx)
- [An event handler is a function](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/9b9fc911d175d98829fd2b88d33ae4b278cd4cb5/part1/src/App.jsx)
- [Passing state - to child components](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/971bd25a5b27f0f9977e199ca3204fc1793ad9f9/part1/src/App.jsx)
- [Refactoring the components](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/8d76d29f253cc9431a391dc8b8e2a44ae1d51c87/part1/src/App.jsx)

---

#### Resources

- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### d. A more complex state, debugging React apps

---

- [Complex state](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/c4d944dddfcc9ef9cdb6365385e01fbca7ee0113/part1/src/App.jsx)
- [Handling arrays](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/dc7e358f08f3aa1b81e6460fcdb0f9d377b33457/part1/src/App.jsx)
- [Conditional rendering](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/8752c125dcdb5aca4fdfdb269979c7be2d2dfec3/part1/src/App.jsx)
- [A function that returns a function](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/8c76e0bcf424f8de125e109d6189a56637040310/part1/src/App.jsx)
- [Do Not Define Components Within Components](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/7fc5cf6541a4d8a5ce50a803611d4cd8907b4c1a/part1/src/App.jsx)

---

- [object spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

#### Complex state

It is forbidden in React to mutate state directly, since [it can result in unexpected side effects](https://stackoverflow.com/a/40309023)

There are situations where it can be beneficial to store a piece of application state in a more complex data structure: https://react.dev/learn/choosing-the-state-structure

#### Debugging React applications

*https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#debugging-react-applications*

#### Useful Reading

*https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#useful-reading*

- [official React documentation](https://react.dev/learn)
- [https://react.dev/learn](https://egghead.io/courses/start-learning-react)
- [Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-reactjs)

#### Web programmers oath

Full stack development is extremely hard, that is why I will use all the possible means to make it easier:

- I will have my browser developer console open all the time
- I will use the network tab of the browser dev tools to ensure that frontend and backend are communicating as I expect
- I will constantly keep an eye on the state of the server to make sure that the data sent there by the frontend is saved there as I expect
- I will keep an eye on the database: does the backend save data there in the right format
- I progress with small steps:
  - when I suspect that there is a bug in the frontend, I make sure that the backend works for sure
  - when I suspect that there is a bug in the backend, I make sure that the frontend works for sure
- I will write lots of console.log statements to make sure I understand how the code and the tests behave and to help pinpoint problems
- If my code does not work, I will not write more code. Instead, I start deleting the code until it works or just return to a state when everything still was still working
- If a test does not pass, I make sure that the tested functionality for sure works in the application

## Part 2. Communicating with server

### a. Rendering a collection, modules

---

- [Rendering Collections](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/7d207c88da15386d9fa759e405fef9d268519bb2/part1/src/main.jsx)
- [Key-attribute](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/21be95095233feeedbdb72fef1d8487e1bca50d7/part1/src/main.jsx)
- [Refactoring Modules](https://github.com/fullstack-hy2020/part2-notes/tree/part2-1)

---

- [Protip: Visual Studio Code snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets)

#### JavaScript Arrays

- [YouTube video series Functional Programming in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

#### Resources

- https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

### b. Forms

---

- [Controlled component](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/9f855dcf22bd4ef04e447f72b17d1978ba5295e7/part2-notes-frontend/src/App.jsx)
- [Filtering Displayed Elements](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/618ff4693f764aa9304c7471dddce7183512f12b/part2-notes-frontend/src/App.jsx)

---

### c. Getting data from server

#### The browser as a runtime environment

- [JSON Server](https://github.com/typicode/json-server)

```sh
npm install json-server --save-dev
npx json-server --port 3001 --watch db.json
```

In [http://localhost:3001/notes](http://localhost:3001/notes) will be the notes.

Plugin to browser [JSONVue](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)

- Install `axios`

```sh
npm install axios
```

#### Resources

- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

---

- [File db.json with data](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/b8da7a5b7e0f85635e88edeaed98ceb28d620242/part2-notes-frontend/db.json)
- [package.json - scripts section - server](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/e5bede5f4e91f31aeb5616f88356abda5a25a294/part2-notes-frontend/package.json)
- [Axios and promises](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/94783c0ca12ea22ed51364274eee3d6a1697b2f0/part2-notes-frontend/src/main.jsx)
- [Effect-hooks](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/6f5b0faf44e2d0587cbd373a1c57b43e6948c72e)

---

### d. Altering data in server

---

- [Sending Data to the Server](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/cb3ce970cffd3683f9abf2bb5bfd2201e9d318b7/part2-notes-frontend/src/App.jsx)
- [Changing the Importance of Notes](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/95360a795cb61c5b040c1adbd6e26b91c0fbf587)
- [Extracting Communication with the Backend into a Separate Module](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/33cf2b402e13811f254dc8bd6a0b3e5a63dd1c79)
- [Cleaner Syntax for Defining Object Literals](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/ee88365e01a6afec91b8782282cbe03f8d63d8d3/part2-notes-frontend/src/services/notes.js)
- [Promises and Errors](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/0c4f46b21208955bfe9a105ebb5a63df9356e75b/part2-notes-frontend/src/App.jsx)

---

- [You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md)

### e. Adding styles to React app

---

- [Adding styles to React app](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/3ecd504ec075bcd6927a26cd26378b456a339af4)
- [Improved error message](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/1ce7769f220918723c0bd64c4a3bc2f203d12583)
- [Inline styles](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/8c233b806b6e8bba07a3d2d7ee2ff5b24f3c8713)
- [Couple of important remarks](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/4dfd93164b5ada3f087ddf70a94266714a201f82)

---

## Part 5. Testing React apps

### a. Login in frontend

```sh
// Primer terminal para ejecutar el backend nodeJS (part4)
cd part5/backend
npm run dev

// En un segundo terminal abierto para ejecutar react (part5 a partir de part2)
cd part5
npm run dev
```

---

- [Handling login](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/f8ef791daf784b166d295ee18672c03918f9425d) _Ver: login.js y notes.js_
- [Creating new notes](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/574402bf3109b4d293a7eb741ae3d24edbdb0c84)
- [Saving the token to the browser's local storage](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/beb3c8c9e34c4ba68758c464b9b952dd101fd0d7)

---

### b. props.children and proptypes

---

- [Displaying the login form only when appropriate](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/4eb85d3d8de9982c1ee3052df0c298e52c870e60)
- [The components children, aka. props.children](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/a841f5834da0c615b0d163b7ebb002ec583b46ae)
- [State of the forms](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/f595abd10e3780e036c67b030f8850b93bd5e99a)
- [References to components with ref](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/5a346be0481c55c98634716835eda8c7aae14ba5)
- [PropTypes](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/c237c51350dab8203787f9ef5ae7eea978743ae9)

```sh
npm install prop-types
```

- [ESlint](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/51134193d130d6a277181996131da4f927619e64)

```sh
npm install --save-dev eslint-plugin-jest
```

_See [.eslintrc.cjs](part5/.eslintrc.cjs) file and [.eslintignore](part5/.eslintignore)_

### c. Testing React apps

Install libraries (react-testing-library):

```sh
npm install jest babel-jest @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/user-event
```

_Extra configuration with [vite](https://fullstackopen.com/en/part5/testing_react_apps#rendering-the-component-for-tests)._

- [Rendering the component for tests](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/1b3863b6890ac56502c11fae9f7fb1bf85a59d75)
- [Searching for content in a component](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/a91a080284c607c3d575b59b96bc4eac690c6b53)
- [Debugging tests](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/d8a00cee65ac4b302bcd7bfbea0b36ce36ef87c9)
- [Clicking buttons in tests](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/2f45f90f75c379994e2ee87f4cfb5ebf579c3ef7)
- [Tests for the Togglable component](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/ea75fbd7e83c064b1aeae9f45faa5d6b55dffe69)
- [Testing the forms](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/7a6c868a1348193d5f5a9b57e02babb619b10e63)
- [About finding the elements](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/c57532d9f6a1f180d67d84ab1501143614fda463)

---

### d. End to end testing

Install `Cypress`:

```sh
npm install --save-dev cypress
npm install eslint-plugin-cypress --save-dev
```

Execute backend in test mode: `cd backend && npm run start:test` and frontend: `npm run dev`. Also in an additional terminal with cypress: `npm run cypress:open`

---

- [Cypress](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/a6db623f6e652d7dac612fa9471741e2374df032)
- [Testing new note form](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/c1f8598824ec37b42e23454df3781c9f36b387ef)
- [Controlling the state of the database](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/5c27958410fe1d3b716cc971dda9742bb79e5b13)
- [Failed login test](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/35effac63736b7a63d4f9a99e0359cd5338680d9)
- [Bypassing the UI](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/b6d82961c0a9d3234ba32b8dc75d2ffdfed0f37a)
- [Changing the importance of a note](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/22bb8af0271238cc8f1a2073c232d4876b83914a)

---

## Part 6. Flux-architexture and Redux

### a. Flux-architecture and Redux

```sh
npm create vite@latest
cd <install-dir>
npm install
npm run dev
npm install redux
```

- [Redux](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/b587cc22e7a7f54c3e5a723e1a20dafc62fd1403)

```sh
npm install redux
```

- [Redux-notes](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/80d7b5f1cec3f50f947418f5471169acd11de59f)
- [Pure functions, immutable](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/6a159920528ed6c6ccdb6eb6dae5f30f1242c829)

```sh
npm install --save-dev jest @babel/preset-env @babel/preset-react eslint-plugin-jest
// add the library deep-freeze, which can be used to ensure that the reducer has been correctly defined as an immutable function
npm install --save-dev deep-freeze
```

_[Install test libraries and configuration](https://gist.github.com/patchamama/d8de350ca100daa570d09244f0892a7e)_

- [Array spread syntax](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/a9f12078509f17f05bfd7eef02ae5d0e849a3f49)
- [Uncontrolled form](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/3993f8c44f60bc5b2f3bde518cafd795fb9f125a)
- [Actions creators](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/a7b4c5b2d108e7431d7713ffaad7ce4cc3e81210)
- [Forwarding Redux Store to various components](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/939d8dcadf2a9965c6bed156350953d48b2ab8e7)

```sh
npm install redux
```

- [More components](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/9344f22322f88317f41f00fa642aa234dfd72566)

### b. Many Reducers

- [Store with complex state](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/355c5e2231b88c14c5c760bb79ade22f12c94c7d)
- [Finishing the filters](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/015b7e783e263eae318f33fac1d4bd07fe2e370f)
- [Redux Toolkit](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/093f73f2c588a8250fe7a471880b3a928b5e304f)

```sh
npm install @reduxjs/toolkit
```

- [Redux Toolkit and console.log](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/c0428846cbab5f6eae54fcdf803d1d97d39e799e)

```js
console.log(JSON.parse(JSON.stringify(state)))
```

- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### c. Communicating with server in a redux application

- [Getting data from the backend](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/b751fd63a0766dc61cd05c89f0c34f4f00cfbe03)
- [Sending data to the backend](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/ab59949e9c6ccfff283688781877f223143f7f05)
- [Asynchronous actions and Redux thunk](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/d4c604b9cf8d72c57a1a513209ef3011582c3e4d)

### d. React Query, useReducer and the context

- Managing data on the server with the React Query library

```sh
npm install @tanstack/react-query
```

- [Synchronizing data to the server using React Query](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/2451909dd8dfcd14fa8461fbcbed7654933a8fe6)
- [useReducer](https://fullstackopen.com/en/part6/react_query_use_reducer_and_the_context#use-reducer) | [Example](https://github.com/fullstack-hy2020/hook-counter/tree/part6-1)
- [useContext - Using context for passing the state to components](https://fullstackopen.com/en/part6/react_query_use_reducer_and_the_context#using-context-for-passing-the-state-to-components) | [Example](https://github.com/fullstack-hy2020/hook-counter/tree/part6-2)
- useContext - Defining the counter context in a separate file| [Example](https://github.com/fullstack-hy2020/hook-counter/tree/part6-3)

### Resources

- [Redux Toolkit](https://redux-toolkit.js.org/)

---

## Part 7. React router, custom hooks, styling app with CSS and webpack

### a. React Router (v5)

Install react router:

```sh
npm install react-router-dom
```

See example using react Router, and the hooks useNavigate, useParams and useMatch [here](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/34ca90b9abd1aa13cda57ae0175799c7d5285239/part7/src/main.jsx)

### b. Custom hooks

Let's define our own custom `useField` hook that simplifies the state management of the form:

```js
const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}
```

The hook can be used in the following way:

```js
const App = () => {
  const name = useField('text')
  // ...

  return (
    <div>
      <form>
        <input type={name.type} value={name.value} onChange={name.onChange} />
        // ...
      </form>
    </div>
  )
}
```

Or with `Spread attributes`:

```js
const App = () => {
  const name = useField('text')
  // ...

  return (
    <div>
      <form>
        <input {...name} />
        // ...
      </form>
    </div>
  )
}
```

As the example in the React documentation states, the following two ways of passing props to a component achieve the exact same result:

```js
<Greeting firstName='Arto' lastName='Hellas' />

const person = {
  firstName: 'Arto',
  lastName: 'Hellas'
}

<Greeting {...person} />
```

### Prototipo de hook para realizar peticiiones fetch con axios que se pueden usar en cualquier aplicación. Solo hay que actualizar `baseURL` y el `token`:

```js
import axios from 'axios'
const baseUrl = '/api/notes'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export default { getAll, create, update, setToken }
```

### c. React Bootstrap

Hay algunas versiones diferentes de React de Bootstrap como [reactstrap](http://reactstrap.github.io/) y [react-bootstrap](https://react-bootstrap.github.io/).

Instalar react-bootstrap:

```sh
npm install react-bootstrap
```

Agregar en la sección del `head` en el archivo `public/index.html`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
```

Código de ejemplo [aquí](notes-bootstrap/src/main.jsx).

### Material UI

Fuente: https://mui.com/

Instalar la librería:

```sh
npm install @mui/material @emotion/react @emotion/styled
```

Código de ejemplo [aquí](notes-materialui/src/main.jsx).

### Ejecutar un servidor local para archivos estáticos. Ejecutar este comando en el directorio con el index:

```sh
npx static-server
```

### Algunos comandos útiles

Puede verificar qué tan actualizadas están sus dependencias usando el comando:

```sh
npm outdated --depth 0
```

Las dependencias se pueden actualizar actualizando el archivo `package.json` y ejecutando el comando:

```sh
npm install -g npm-check-updates
npm-check-updates
```

El archivo package.json se actualiza ejecutando el comando `ncu -u` y `npm install`.

Para revisar dependencias con problemas de seguridad (`npm audit`) y hacer las correcciones: `npm audit fix`. El comando `npm audit fix --force` puede determinar en actualizaciones _major_ que pueden colapsar la aplicación.

### Seguridad

La documentación de Express incluye una sección sobre seguridad: [Prácticas recomendadas de producción: seguridad](https://expressjs.com/en/advanced/best-practice-security.html), que vale la pena leer. También se recomienda agregar una librería llamada [Helmet](https://helmetjs.github.io/) al backend. Incluye un conjunto de middlewares que eliminan algunas vulnerabilidades de seguridad en aplicaciones Express.

También vale la pena usar el [plugin de seguridad](https://github.com/nodesecurity/eslint-plugin-security) de ESlint.

### Instalar y configurar prettier:

```sh
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{\n\"trailingComma\": \"none\",\n\"tabWidth\": 2,\n\"semi\": false,\n\"singleQuote\": true,\n\"editor.formatOnSave\": true\n}\n')"
node --eval "fs.writeFileSync('.prettierignore','build\ncoverage')"
```

Fuente: https://prettier.io/docs/en/install

---

## Part 9. TypeScript

[README](part9-TypeScript/README.md)

---

## Part 11. Continuous Integration / Continuous Delivery systems (CI/CD)

[README](part11-CI_CD/README.md)

---

## Part 12. Containers

[README](part12-containers/README.md)

---

## Part 12. Using relational databases

[README](part13_Using-relational-databases/README.md)
