import fs from 'fs';
import path from 'path';

const createFiles = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath, { withFileTypes: true });

  filesToCreate.forEach((file) => {
    const filePath = path.join(templatePath, file.name);

    if (file.isFile()) {
      const contents = fs.readFileSync(filePath, 'utf8');

      if (file === '.npmignore') {
        file = '.gitignore';
      }

      const writePath = path.join(newProjectPath, file.name);

      fs.writeFileSync(writePath, contents, 'utf8');
    }

    // If it's a folder, recursively get all the files within
    else if (file.isDirectory()) {
      fs.mkdirSync(path.join(newProjectPath, file.name));

      createFiles(path.join(templatePath, file.name), path.join(newProjectPath, file.name));
    }
  });
};

export default createFiles;
