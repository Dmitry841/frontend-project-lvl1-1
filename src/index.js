import readlineSync from 'readline-sync';
import greeting from './cli.js';

const run = (description, generateRoundData) => {
  const roundsCount = 3;
  const name = greeting();
  console.log(description);

  let counter = 0;

  while (counter < roundsCount) {
    const [textQuestion, answerCorrect] = generateRoundData();
    console.log(`Question: ${textQuestion}`);
    const answer = (readlineSync.question('Your answer: '));
    if (answerCorrect === answer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
      console.log(`Let's try again, ${name}!`);
      counter = 0;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default run;
