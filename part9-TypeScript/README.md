## Part 9. TypeScript

_https://fullstackopen.com/en/part9_

### a. Background and introduction

TypeScript offers features such as better development-time tooling, static code analysis, compile-time type checking and code-level documentation.

**Sources:**

- https://github.com/DefinitelyTyped/DefinitelyTyped
- https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html

### b. First steps with TypeScript

Install ts-node (npm) to compile and exec TypeScript. Global installation:

```sh
npm install --location=global ts-node typescript
```

Non global installation:

```sh
npm install --save-dev ts-node typescript
```

Exec a script: `npm run ts-node` or a file .ts: `npm run ts-node file.ts -- -s --someoption`

**Sources:**

- [TypeScript playground](https://typescriptlang.org/play)

#### Creating your first own types

Tipos primitivos: string, number,...

```ts
type Operation = 'multiply' | 'add' | 'divide'

type example = string | number // solo acepta un valor string o número

type Operation = 'multiply' | 'add' | 'divide'

const calculator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case 'multiply':
      return a * b
    case 'divide':
      if (b === 0) throw new Error("Can't divide by 0!")
      return a / b
    case 'add':
      return a + b
    default:
      throw new Error('Operation is not multiply, add or divide!')
  }
}

try {
  console.log(calculator(1, 5, 'divide'))
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message
  }
  console.log(errorMessage)
}
```

_Operation solo acepta estos tres tipos de valores_

#### @types/{npm_package}

Por lo general, las tipificaciones de paquetes existentes se pueden encontrar en la organización @types dentro de npm, y puedes agregar los tipos relevantes a tu proyecto instalando un paquete npm con el nombre de tu paquete con el prefijo @types/. Por ejemplo:

```sh
npm install --save-dev @types/react @types/express @types/lodash @types/jest @types/mongoose
```

NB: _Dado que las tipificaciones solo se usan antes de la compilación, estas no son necesarias en la compilación de producción y siempre deben estar en devDependencies del package.json_

- Improving the project

```sh
npm run multiply 5 2
# devuelve un error:
npm run multiply 1 lol
```

- The alternative array syntax

```ts
let values: number[]
let values: Array<number> // generic syntax
```

- More about tsconfig

**Sources:**

- https://www.typescriptlang.org/tsconfig

### Adding Express to the mix

    A good rule of thumb is to try importing a module using the import statement first. We will always use this method in the frontend. If import does not work, try a combined method: import ... = require('...').

If it is absolutely impossible to get rid of an unused variable in VSCode, you can prefix it with an underscore to inform the compiler you have thought about it and there is nothing you can do. Example, let's rename the `req` variable `to \_req`.

El equivalente a `nodemon` en ts es `ts-node-dev` para el modo de desarrollo, detectando los cambios y recargando nuevamente el navegador. Para insalarlo (y agreagar a la sección de scripts de package.json `"dev": "ts-node-dev index.ts",`):

```sh
npm install --save-dev ts-node-dev
```

**Sources:**

- https://www.typescriptlang.org/docs/handbook/modules.html
