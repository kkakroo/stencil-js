# stencil-js react wrapper creation

### This repo explains the process of creation of React wrappers for Stencil Web Components using framework bindings.

Note: you need to be logged in to npm first by `npm login` command

#### First we build and publish the kk-component-library
```
cd kk-component-library
npm run build
npm publish
```

#### Once it is published, we need to use our newly created package to create a react wrapper for it
```
cd kk-component-library-react
npm run build
npm publish
```

This will publish the react wrapper package to npm
