# fullstackopen-Course-and-testing

- Table of contents
  - [Part 1. Introduction to React](#part-1-introduction-to-react)
    - [a. Introduction to React](#a-introduction-to-react)
    - [b. JavaScript](#b-javascript)
    - [c. Component state, event handlers](#c-component-state--event-handlers)
    - [d. A more complex state, debugging React apps](#d-a-more-complex-state--debugging-react-apps)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

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

Programming is hard, that is why I will use all the possible means to make it easier

- I will have my browser developer console open all the time
- I progress with small steps
- I will write lots of console.log statements to make sure I understand how the code behaves and to help pinpointing problems
- If my code does not work, I will not write more code. Instead I start deleting the code until it works or just return to a state when everything was still working

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

#### Resources

- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

---

- [File db.json with data](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/b8da7a5b7e0f85635e88edeaed98ceb28d620242/part2-notes-frontend/db.json)
- [package.json - scripts section - server](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/e5bede5f4e91f31aeb5616f88356abda5a25a294/part2-notes-frontend/package.json)
- [Axios and promises](https://github.com/patchamama/fullstackopen-Course-and-testing/blob/94783c0ca12ea22ed51364274eee3d6a1697b2f0/part2-notes-frontend/src/main.jsx)
- [Effect-hooks](https://github.com/patchamama/fullstackopen-Course-and-testing/commit/6f5b0faf44e2d0587cbd373a1c57b43e6948c72e)

---
