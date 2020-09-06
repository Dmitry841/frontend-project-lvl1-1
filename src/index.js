import readlineSync from 'readline-sync';

const roundsCount = 3;

const run = (description, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(description);

  let counter = roundsCount;

  while (counter > 0) {
    counter -= 1;
    const [textQuestion, answerCorrect] = generateRoundData();
    console.log(`Question: ${textQuestion}`);
    const answer = (readlineSync.question('Your answer: '));
    if (answerCorrect === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default run;
