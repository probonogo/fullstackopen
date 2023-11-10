# fullstackopen-Course-and-testing

## Part 1. Introduction to React

### a. Introduction to React

```
npm create vite@latest
cd <install-dir>
npm install
npm run dev
```

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

#### Resources

- [Chrome V8](https://developers.google.com/v8/)
- [Console JS Tools online](https://jsbin.com/?js,console)
- []()
- []()
- []()
- []()
- []()
- []()
- []()
