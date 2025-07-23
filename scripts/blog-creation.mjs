import { input } from '@inquirer/prompts';
import dedent from 'dedent';
import * as fs from 'fs';

function countFiles(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(`Error reading directory: ${err}`);
      } else {
        const fileCount = files.filter((file) =>
          fs.statSync(`${directoryPath}/${file}`).isFile(),
        ).length;
        resolve(fileCount);
      }
    });
  });
}

const generateContent = async (answers) => {
  const total = await countFiles('content/blogs');

  return dedent`
    ---
    title: ${answers.title}
    description: ${answers.description}
    order: ${total + 1}
    ---

    ## Introduction

    ### Sub Header
  `;
};

const run = async () => {
  const title = await input({
    message: 'Enter Title:',
    validate: function (value) {
      if (!value) {
        return 'Title is required.';
      }
      return true;
    },
  });
  console.log(title);

  const description = await input({
    message: 'Enter description',
    validate: function (value) {
      if (!value) {
        return 'Description is required.';
      }
      return true;
    },
  });
  console.log(description);

  const answers = { title, description };

  const fileContent = await generateContent(answers);
  const fileName = answers.title.toLowerCase().split(' ').join('-');
  const filePath = `content/blogs/${fileName}.mdx`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Article generated at ${filePath}`);
    }
  });
};

run();
