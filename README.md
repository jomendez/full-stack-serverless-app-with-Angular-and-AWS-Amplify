# AmplifyApp

This is basically a Full-stack serverless app using Vue and AWS Amplify, with full authorization flow using the authenticator component.


## Pre requisites:

- Node.js v10.x or later
- npm v5.x or later
- git bash (if using windows) 

## Install dependencies

Run the following command to install the specific angular-cli and aws-amplify-cli version that will work with this project.

```
./install-dependencies.sh
```

## Configure amplify

sign up to your AWS Account and configure it, follow instructions on the following link:

[https://docs.amplify.aws/start/getting-started/installation/q/integration/vue#option-2-follow-the-instructions](https://docs.amplify.aws/start/getting-started/installation/q/integration/vue#option-2-follow-the-instructions)

```
amplify configure
```

## Setting up your Amplify project

AWS Amplify allows you to create different environments to define your preferences and settings. For any new project you need to run the command below and answer as follows:

```
amplify init
```

- Enter a name for the project: amplify-app
- Enter a name for the environment: dev
- Choose your default editor: Visual Studio Code
- Please choose the type of app that you’re building javascript
- What javascript framework are you using Angular
- Source Directory Path: src
- Distribution Directory Path: dist
- Build Command: npm run-script build
- Start Command: ng serve
- Do you want to use an AWS profile? Yes
- Please choose the profile you want to use default

## Adding authentication 

```
amplify add auth
```

When prompted choose:
- Do you want to use default authentication and security configuration?: Default - configuration
- How do you want users to be able to sign in when using your Cognito User Pool?: Username
- Do you want to configure advanced settings? No

## Pushing changes to the cloud

By running the push command, the cloud resources will be provisioned and created in your AWS account.
```
amplify push
```
To quickly check your newly created Cognito User Pool you can run
```
amplify status
```

# Angular 

## Install dependencies 

Run the following command:
```
npm install
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
