# Weather Forecast App

This Weather Forecast App is a simple application to see weather updates.

## Environment Setup

-   [Node 18.x](https://nodejs.org/en/) (use [NVM](https://github.com/nvm-sh/nvm))

## Install

```bash
$ npm install
```

## Available Scripts

In the project directory, you can run:

### `npm install`
To install all dependencies in package.json

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

## Libraries / Tools
| Purpose              | Library          |
| -------------------- | ---------------- |
| User Authentication  | Auth0 React SDK  |
| Component UI         | Material UI      |
| Component Styling    | Emotion          |
| Prop Types           | prop-types       |

### Directory Structure

-   All components other than the main container or index, actions, libraries, modals, models, reducers, screens, and validators should be inside the components folder.
-   Filename formats:
    -   Constants: `camelCase`
    -   Components: `PascalCase`
    -   Modules: `PascalCase`
    -   Utils: `camelCase`
-   Example:

```
    📂 src
        📂 assets
            📂 fonts
            📂 images
        📁 components
          📁 Common
            📁 Button
              📄 indext.test.js
              📄 index.js
              📄 styles.js
          📁 Form
        📂 constants
            📄 global.js
            📄 icon.js
            📄 menu.js
        📁 enums
          📄 index.js
        📁 redux
          📂 actions
          📂 actionTypes
          📂 initialStates
          📂 reducers
          📄 store.js
        📂 utils
            📄 api.js
            📄 helper.js
        📂 views
          📁 Auth
            📂 Login
              📄 index.js
            📂 Register
              📄 index.js
          📂 <Module>
              📄 AddEdit.js
              📄 Details.js
              📄 index.js
    📁 scripts
```

## Licence
Amie Rigo, Developer
