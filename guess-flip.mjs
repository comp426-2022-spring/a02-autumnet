import { coinFlip, flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

// Extract the call argument from the input
const args = minimist(process.argv.slice(2));
// Create a new key in args called 'call'
args['call']
// Flip the coin and see if it matches the user's guess
const guess = args.call
if (guess != 'heads' & guess != 'tails') {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(guess));
}