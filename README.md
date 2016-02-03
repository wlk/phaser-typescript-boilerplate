# Getting Started

### Pre-requisites

You need to have `node` and `npm` installed.

### Dependencies

You need to have typescript installed (globally):
```
sudo npm install -g typescript
sudo npm install -g tslint
```

Then inside the project directory run:
```
npm install
```

This will install all required local dependencies

### Building the project

To build project you can use:

```
npm build
```

Or just run:

```
tsc
```

the `tsconfig.json` has is configured for you

### Running in dev mode:

```
npm dev
```

### Known problems

* `tslint` doesn't support directory as parameter (you can use what's integrated in your IDE)

# IDE support

### Intellij IDEA

Intellij has pretty good support for Typescript and this project, you can either used bundled typescript compiler or use the one installed via npm (but make sure you are putting generated `*.js` files to the `build` directory)
