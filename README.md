# fullstackopen-Course-and-testing

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

#### Resources

- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### d. A more complex state, debugging React apps

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
