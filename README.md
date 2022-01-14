## PROJECT ADDRESS-BOOK, REQUIREMENTS

* create a web application in react for managing contacts (an address book)

* each contact should have the fields (picture, name, address)

* the application should allow you to add, edit, delete and export in CSV format

* the contacts should be searchable by name

* store the contacts in an SQL database



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run server`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` //THE PROBABLE CAUSE OF THE ERROR OCURRING DURING NPM RUN DEPLOY ON GH-PAGES (ALSO CREATES A BUILD FOLDER)

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### ADDED DEVELOPMENT DEPENDENCIES

** npx create-react-app address-book
--
** npm install axios 
--
** npm install json-server //development phase
--
** npm install styled-components
--
** npm install gh_pages -save--dev
--

-Created: db.json file with mockup info (resource: https://www.mockaroo.com/)
--
added to package.json scripts: 
--
  **"server": "json-server --watch db.json --port 3004",
     --
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
-added to package.json: "homepage": "http://marinaLukovac.github.io/address-book"
-npm run server is the command for the json

path to heroku server: NodeJS json-server
https://address-books-server.herokuapp.com/contacts

## warning to handle:
Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'.

## ERRORS:

-during gh-pages deploys kept occurring an error: Typeeror for useState...  
-- 
-solution:  import useState from 'react'... while deploying it kept rewriting to some other text
--

// OTHER
### `npm run eject` //EXPLORE WHAT WHY AND HOW

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
