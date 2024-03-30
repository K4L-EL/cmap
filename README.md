# compmap README.md

## Overview

`compmap` is a lightweight, powerful utility designed for React applications to simplify mapping data arrays to React components. By abstracting the boilerplate code involved in mapping arrays, `compmap` allows developers to focus more on the development of their application rather than repetitive mapping logic. It also seamlessly handles key assignment for each mapped component, utilizing either a provided key or generating a unique one when necessary.

## Installation

To integrate `compmap` into your project, run the following command:

```sh
npm install compmap
```

or if you prefer using Yarn:

```sh
yarn add compmap
```

Ensure you have React and UUID packages in your project as `compmap` relies on these as peer dependencies.

## Usage

The basic syntax of `compmap` is straightforward. Here are examples to illustrate typical usage:

### Basic Example

Instead of writing:

```jsx
{data.map((d) => (
  <TextComp name={d.name} age={d.age} money={d.money} />
))}
```

You can simply write:

```jsx
import compmap from 'compmap';

{compmap(data, TextComp)}
```

### With TypeScript

When using TypeScript, you can also specify the type of your data:

```jsx
import compmap from 'compmap';

{compmap<ITextComp>(data, TextComp)}
```

Or without specifying the type explicitly:

```jsx
{compmap(data, TextComp)}
```

## Features

- Simplifies the mapping of data arrays to React components.
- Automatically handles key assignment for each component instance, enhancing performance and consistency in React's rendering process.
- Supports TypeScript for type-safe development.
- Lightweight with minimal dependencies.

## Requirements

`compmap` requires the following peer dependencies:

- `@types/node`
- `@types/react`
- `@types/react-dom`
- `react`
- `react-dom`
- `react-scripts`
- `typescript`
- `uuid`

Ensure these are installed in your project to avoid any compatibility issues.

## Contributing

We welcome contributions to `compmap`! If you have a suggestion, bug report, or a feature request, please open an issue on our [GitHub repository](https://github.com/K4L-EL/compmap/issues). If you're feeling adventurous and want to contribute code, please feel free to fork the repository and submit a pull request.

## License

`compmap` is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

Thank you for using `compmap`. Happy coding!
