As a program grows, it is not only the number of lines of code that increases, but also the number of modules. In small projects you can keep dozens of files side by side, but real applications can have hundreds and thousands of files. On top of that, useful code is something you want to reuse across different projects.

In Python, packages-as-directories are used to group modules. In the JavaScript ecosystem, the unit of reuse and distribution is a **package** (an npm package). A package is a set of modules that is published and installed as a whole.

## What a package is

A package is described by a `package.json` file and installed with the `npm install` command into the `node_modules` directory. That is where its modules are imported from. One such package is `hexlet-basics`, the one we import functions from in this course.

## Importing by package name

When a package is installed, its contents are imported by the package name rather than by a file path:

```javascript
import { round } from 'hexlet-basics/math';

console.log(round(3.14159, 2)); // => 3.14
```

## One package, several modules

A package usually contains more than one module. To pick a specific module inside a package, you add a path after its name with `/`:

```javascript
import { reverse } from 'hexlet-basics/string'; // the string module of the hexlet-basics package
import { round } from 'hexlet-basics/math';     // the math module of the same package
```

The part before `/` is the package name, and the part after it is the module inside it. This way a single package can bundle many modules grouped by task.

## package.json

A package describes itself in a `package.json` file. It specifies the name, the dependencies, and which modules the package exposes:

```json
{
  "name": "hexlet-basics",
  "dependencies": {},
  "exports": {
    "./string": "./src/hexlet/string.js",
    "./math": "./src/hexlet/math.js"
  }
}
```

The `exports` field defines which paths are available on import. Thanks to it, writing `hexlet-basics/string` resolves to the right file inside the package.

## node_modules and the npm registry

Installed packages end up in the `node_modules` directory. You don't write them by hand — the main source is the npm registry, where hundreds of thousands of ready-made packages are published: for working with dates, networking, testing, and almost any other task.

Node.js built-in modules (`node:fs`, `node:path`, and others) stand apart. You don't need to install them — they ship with Node.js, like a standard library.
