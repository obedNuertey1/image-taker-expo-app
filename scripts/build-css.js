const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const inputFile = './styles/tailwind.css';
const outputFile = './styles/tailwind-output.css';

fs.readFile(inputFile, (err, css) => {
  if (err) throw err;

  postcss([tailwindcss, autoprefixer])
    .process(css, { from: inputFile, to: outputFile })
    .then(result => {
      fs.writeFile(outputFile, result.css, () => true);
      if (result.map) {
        fs.writeFile(outputFile + '.map', result.map.toString(), () => true);
      }
    });
});
