// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs'
import minimist from "minimist";

// Get argument from command line
const args = minimist(process.argv.slice(2));
// Create a new entry in args with key 'number' and define a comstant with its value
args['number']
const number = args.number || 1;

var result = coinFlips(number)
// Output the array of flips and its count summary
console.log(result);

if (number = args.number) {
    console.log(countFlips(result));
} if (number =1) {
    var tails=0;
    var heads=0;
    for (const flip of result) {
    if (flip === "heads") {
      console.log({"heads":1});
    } else { console.log({"tails":1});
    }
  } 
}