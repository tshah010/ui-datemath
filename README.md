# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Run Locally

In the project directory

`npm i`  
Installs the dependencies listed in `package.json`

`npm start`\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm test`\
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`\
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## To Deploy to AWS

Configure [AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html).

`aws s3 sync build/ s3://datemath.net`\
Copies the `build` folder to S3 in AWS. Open http://datemath.net to view it in the browser.

## Helpful Resources

-   [React Semantic UI](https://react.semantic-ui.com/)
-   [Semantic UI](https://semantic-ui.com/introduction/getting-started.html)
-   [Semantic UI Calendar](https://www.npmjs.com/package/semantic-ui-calendar-react)
-   [Semantic-UI-Forest](https://semantic-ui-forest.com/)
