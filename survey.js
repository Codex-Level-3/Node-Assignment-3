"use strict";

import inquirer from "inquirer";
import favoriteLanguage from "./questions/favoriteLanguage.js";
import preferredFramework from "./questions/preferredFramework.js";

inquirer
  .prompt([favoriteLanguage, preferredFramework])
  .then((answers) => {
    console.log(
      `
    Thank you for completing the survey! Here is a summary of your preferences:
    Favorite programming language: ${answers.favoriteLanguage}
    Preferred framework: ${answers.preferredFramework}
    `
    );
  })
  .catch((error) => {
    console.error("Error occurred during survey:", error);
  });
