// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs'
import minimist from "minimist";

// Get argument from command line
const args = minimist(process.argv.slice(2));
// Create a new entry in args with key 'number' and define a comstant with its value
args['number']
const number = args.number || 1;
// Output the array of flips and its count summary
console.log(coinFlips(number))
console.log(countFlips(coinFlips(number)));