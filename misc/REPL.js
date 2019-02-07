/*
 * Example REPL server taking the word fizz and logging out buzz
 *
 */

// Dependencies
var repl = require('repl');

// Start the repl
repl.start({
    'prompt' : '>',
    'eval' : function(str){
        // Evaluation function for incoming inputs
        console.log('At evalutation stage: ' ,str);

        // If the user said fizz, say buzz back to them
        if(str.indexOf('fizz')>-1){
            console.log('buzz');
        }
    }
});