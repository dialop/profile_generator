const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userProfile = {}; // object that stores the answers

function startQuestions() {
  rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    userProfile.name = name;

    rl.question("What's an activity you like doing? ", (activity) => {
      userProfile.activity = activity;

      rl.question("What do you listen to while doing that? ", (music) => {
        userProfile.music = music;

        rl.question("Which meal is your favourite (e.g., dinner, brunch, etc.)? ", (meal) => {
          userProfile.meal = meal;

          rl.question(`What's your favourite thing to eat for ${userProfile.meal}? `, (food) => {
            userProfile.food = food;

            rl.question("Which sport is your absolute favourite? ", (sport) => {
              userProfile.sport = sport;

              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                userProfile.superpower = superpower;

    

                createProfiles();

              });


            });




          });

        });
      });

    });

  });

}

function createProfiles() {
  const paragraph = `Hi, I am ${userProfile.name}. I like ${userProfile.activity} and one of the things I enjoy is to listen to ${userProfile.music}. During my free time I like to ${userProfile.food}. I like to play ${userProfile.sport} and my superpower is ${userProfile.superpower}.`;

  console.log(paragraph);

  rl.close();
}

startQuestions();







// ** Notes **
// The redline module in node.js helps us read line by line at a time from the standard input (stdin)
// he important functions in the readline module that we'll be using are:
// readline.createInterface(options): Creates a new readline.Interface instance that can be used to read lines from the input stream
// interface.question(query, callback): Asks the user the specified query and waits for user input. The user's input will be passed to the callback function as an argument
// interface.close(): Closes the interface and allows the program to terminate gracefully

