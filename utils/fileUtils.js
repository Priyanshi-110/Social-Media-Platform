const fs = require('fs');
const path = require('path');

// Read JSON file
const readFile = (filename) => {
  const filePath = path.join(__dirname, `../data/${filename}`);
  const rawData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(rawData);
};

// Write to JSON file
const writeFile = (filename, data) => {
  const filePath = path.join(__dirname, `../data/${filename}`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readFile, writeFile };
