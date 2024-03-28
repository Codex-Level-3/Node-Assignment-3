# Node-Assignment-3

## Objective

Create a modular Node.js command-line survey tool that collects users' programming preferences using the Inquirer package. This tool will demonstrate your ability to structure code into modules for different survey questions and integrate user input handling in a cohesive application.

## Structuring Survey

I created a simple and short survey.

- Step 1: Created a questions directory folder.
- Step 2: Inside the questions directory, I created two modules.
  - favoriteLanguage.js uses the inquirer object input type.
  - preferredFramework.js uses the inquirer object list type.
- Step 3: After creating the objects for each module, I used `export deafaut favoriteLanguage` because I'm using the current version of Inquirer.
- Step 4: Adding "type": "module" to the package.json because it is also required for the current version.

## Implementing Survey Tool

- Created survey.js file.
- Imported inquirer and module files using the following syntax:

```
import inquirer from 'inquirer';
```

- Used inquirer then() method to prompt the user with questions from the created modules and display responses.

## Survey Tool

This tool collects users' programming preferences using the Inquirer package.

## How to Run

- Clone Repository
- Navigate to the project directory: `cd Node-Assignment-3`
- Install dependencies: `npm install`
- Run the survey tool: `node survey.js`

### Purpose of Modules

#### Favorite Language

Exports a question object asking the user to input their favorite programming language.

#### Preferred Framework

Exports a question object asking the user to choose which framework they prefer from the available choices.
