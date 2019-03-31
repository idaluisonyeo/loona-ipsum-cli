const text = require('./loona-text');
const packageInfo = require('../package.json');
const helpers = require('./helpers');

const sentences = text.loonaIpsum
  .split('. ')
  .filter(sentence => sentence.length > 0)
  .map(sentence => `${sentence.trim()}.`);

const firstSentence = sentences[0];

const getRandomSentence = () => {
  const number = helpers.getRandomNumberInRange(0, sentences.length);
  return sentences[number];
};

const generateParagraph = (numberOfSentences = 10) => {
  let paragraph = '';
  for (let index = 0; index < numberOfSentences; index++) {
    paragraph = `${paragraph} ${getRandomSentence()}`;
  }

  return paragraph;
};

exports.paragraph = (count) => {
  let paragraph = firstSentence;
  for (let index = 0; index < count; index++) {
    paragraph = `
      ${paragraph}${generateParagraph()}
    `;
  }
  console.log(paragraph);
  process.exit();
};

exports.sentence = (count) => {
  let sentence = '';
  for (let index = 0; index < count; index++) {
    sentence = `${sentence} ${getRandomSentence()}`;
  }
  console.log(sentence);
  process.exit();
};

exports.help = () => {
  console.log(`
    ${packageInfo.description}

    Usage:

    loonaipsum
        Generates a random paragraph.

    loonaipsum -s, --sentence
        Generates a random sentence.

    loonaipsum -s -c <number>, --sentence --count <number>
        Generates a number of random sentences.

    loonaipsum -p, --paragraph
        Generates a paragraph.

    loonaipsum -p -c <number>, --paragraph --count <number>
        Generates a number of paragraphs.

    loonaipsum -v, --version
        Displays the version of this program.

    loonaipsum <anything-else>
        Displays this message.
  `);

  process.exit();
};
