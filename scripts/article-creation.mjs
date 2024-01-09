import * as fs from 'fs';
import dedent from "dedent";
import { input } from '@inquirer/prompts';

const formatDate = () => {
  const date = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options);

  const parts = formatter.formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  const { day, month, year } = parts;

  // Function to add 'st', 'nd', 'rd', or 'th' to the day
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
  const daySuffix = getDaySuffix(parseInt(day, 10));

  return `${month} ${day}${daySuffix}, ${year}`;
}

function countFiles(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(`Error reading directory: ${err}`);
      } else {
        const fileCount = files.filter(file => fs.statSync(`${directoryPath}/${file}`).isFile()).length;
        resolve(fileCount);
      }
    });
  });
}

const generateContent = async (answers) => {
  const formattedDate = formatDate();
  const total = await countFiles('pages/blogs');

  return dedent`
    ---
    title: ${answers.title}
    description: ${answers.description}
    date: ${formattedDate}
    order: ${total + 1}
    ---

    ## Introduction

    ### Sub Header
  `;
};

const run = async () => {
  const title = await input({
    message: 'Enter Title:',
    validate: function(value) {
      if (!value) {
        return 'Title is required.';
      }
      return true;
    }
  });
  console.log(title);

  const description = await input({
    message: 'Enter description',
    validate: function(value) {
      if (!value) {
        return 'Description is required.'
      }
      return true;
    }
  });
  console.log(description);

  const answers = {
    title,
    description,
  }

  const fileContent = await generateContent(answers);
  const fileName = answers.title.toLowerCase().split(' ').join('-');
  const filePath = `pages/blogs/${fileName}.mdx`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Article generated at ${filePath}`);
    }
  })
}

run();
