import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What is the result of the expression?';
const min = 0;
const max = 20;
const lengthProgression = 10;

const generateProgression = (firstNum, step, length) => {
  const progression = [firstNum];
  while (progression.length < length) {
    progression.push(progression[progression.length - 1] + step);
  }
  return progression;
};

const generateRoundData = () => {
  const firstNum = generateNumber(min, max);
  const step = generateNumber(min, max);
  const progression = generateProgression(firstNum, step, lengthProgression);
  const hiddenNumIndex = generateNumber(0, progression.length - 1);
  const correctAnswer = `${progression[hiddenNumIndex]}`;
  progression[hiddenNumIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => run(description, generateRoundData);

export default runProgressionGame;
