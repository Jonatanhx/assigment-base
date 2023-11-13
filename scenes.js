// Template
/*   {
  text: " ",
  description: {
    text:  " ",
  },
  button1: {
    text: " ",
    nextSceneIndex: 0,
  },

  button2: {
    text: " ",
    nextSceneIndex: 0,
  },
},
*/




let activeSceneIndex = parseInt(localStorage.getItem("CurrentSceneIndex")) || 0;;
const scenes = [
  {
    text: "Welcome to Touch grass the game!",
    
    description: {
      text:  "The objective of this game is to successfully exit your moms basement and go outside",
    },

    button1: {
      text: "Play",
      nextSceneIndex: 1,
    },  
    button2: {
      text: "Don't play",
      nextSceneIndex: 15,
    },
  },

  //scene 1
  {
    text: "You wake up after 5h of low quality caffeine-infused sleep",
    description: {
      text:  "your first instinct is to...",
    },
    button1: {
      text: "Start the PC",
      nextSceneIndex: 2,
    },
    button2: {
      text: "Make breakfast",
      nextSceneIndex: 3,
    },
  },

  // scene 2
  {
    text: "World of Warcraft or Dota 2?* you ask yourself",
    description: {
      text:  "",
    },
    button1: {
      text: "World of Warcraft",
      nextSceneIndex: 17,
    },
    button2: {
      text: "Dota 2",
      nextSceneIndex: 6,
    },
  },
  
  // scene 3
  {
    text: "You walk into the kitchen",
    description: {
      text:  "What do you make to eat?",
    },
    button1: {
      text: "A full english breakfast, can't be a winner on an empty stomache.",
      nextSceneIndex: 4,
    },

    button2: {
      text: "A can of mountain dew will have to suffice.",
      nextSceneIndex: 5,
    },
  },
  //Scene 4
  {
    text: "You have died.",
    description: {
      text:  "Due to the sudden chock from consuming actual nutritious food, your heart gives up.",
    },
    button1: {
      text: "Play again",
      nextSceneIndex: 1,
    },

    button2: {
      text: "Return to Menu",
      nextSceneIndex: 0,
    },
  },
//Scene 5 the mountain dew incident
{
  text: "Feeling energized from the caffeine, you enter a state of mania.",
  description: {
    text:  "What do you decide to do?",
  },
  button1: {
    text: "Make a change to become a healthier person",
    nextSceneIndex: 18,
  },

  button2: {
    text: "Be productive playing video games",
    nextSceneIndex: 6,
  },
},
//Scene 6 the good video game path
{
  text: "'Let's play some Dota 2'",
  description: {
    text:  "Being the epitome of masculinity that you are, there is no role but position 1 (Hard carry) for you. What character do you play?",
  },
  button1: {
    text: "Pick Anti-Mage",
    nextSceneIndex: 7,
  },

  button2: {
    text: "Pick Sniper",
    nextSceneIndex: 16,
  },
},
//Scene 7 The anti-mage route
{
  text: "Excellent choice",
  description: {
    text:  "Your support talks to you about strategies using voice chat, turns out, she's a woman! How do you respond?",
  },
  button1: {
    text: "Casually respond with your game plan",
    nextSceneIndex: 9,
  },

  button2: {
    text: "Unleash the full power of a redditor",
    nextSceneIndex: 8,
  },
},
//Scene 8 Game lose loop
{
  text: "You respond with 'M'lady, why is such a beautiful girl like you playing dota?'",
  description: {
    text:  "She leaves the game, making your team lose. ",
  },
  button1: {
    text: "Play another game",
    nextSceneIndex: 6,
  },
  button2: {
    text: "Play another game",
    nextSceneIndex: 6,
  },
},
//Scene 9 The romance path
{
  text: "Your strategies allows your team to win",
  description: {
    text:  "Impressed by your skills, the woman adds you as a friend and asks if you want to play another game. How do you respond?",
  },
  button1: {
    text: "'Sure, want to talk on Discord?'",
    nextSceneIndex: 10,
  },
  button2: {
    text: "'This is the only thing i do anyway, sure'",
    nextSceneIndex: 13,
  },
},
//Scene 10 romanting ending
{
  text: "Fast forward 3 months. You and the woman have been chatting consistently on discord and you find out she does not live far away",
  description: {
    text:  "You end up asking her out on a date, where do you take her? ",
  },
  button1: {
    text: "1-star michelin restaurant",
    nextSceneIndex: 11,
  },

  button2: {
    text: "Cook her a meal at home, that'll impress her",
    nextSceneIndex: 12,
  },
},
// Scene 11 romantic ending
{
  text: "Congratulations! you have successfully touched grass!",
  description: {
    text:  "You have acquired a gamer-girlfriend",
  },
  button1: {
    text: "Play again",
    nextSceneIndex: 1,
  },

  button2: {
    text: "Return to Menu",
    nextSceneIndex: 0,
  },
},
//Scene 12 The failed home-dinner
{
  text: "You have died",
  description: {
    text:  "You were blissfully anaware that the fancy dinner composed of cheap wine and Steak with fries was contaminated by a deadly amount of E.coli. Should have learnt food safety precautions",
  },
  button1: {
    text: "Play again",
    nextSceneIndex: 1,
  },

  button2: {
    text: "Return to Menu",
    nextSceneIndex: 0,
  },
},
//Scene 13 uninterested woman - the dark ending
{
  text: "Sensing hints of self-loathing, she reluctantly plays one more game with you but blocks you afterwards",
  description: {
    text:  "How do you feel emotionally?",
  },
  //Survival path
  button1: {
    text: "I'm OK.",
    nextSceneIndex: 0,
  },
  //Rampage path
  button2: {
    text: "Furious",
    nextSceneIndex: 14,
  },
},
//Scene 14 Rampage path
{
  text: "You have died.",
  description: {
    text:  "Boiling in anger, you posted some regrettable threats on 4chan and got raided by the secret police. they don't treat misogynists kindly.",
  },
  button1: {
    text: "Play again",
    nextSceneIndex: 1,
  },

  button2: {
    text: "Return to Menu",
    nextSceneIndex: 0,
  },
},
//Scene 15, "Don't play" selected
{
  text: " ",
  description: {
    text:  " ",
  },
  button1: {
    text: "I will play the game now",
    nextSceneIndex: 1,
  },

  button2: {
    text: "Return to Menu",
    nextSceneIndex: 0,
  },
},
// Scene 16 sniper selected
{
  text: "Fucking sniper pickers man",
  description: {
    text:  "Make me SICK",
  },
  button1: {
    text: "Play again",
    nextSceneIndex: 1,
  },

  button2: {
    text: "Return to Menu",
    nextSceneIndex: 0,
  },
},
//Scene 17 World of Warcraft selected
{
  text: "You have died",
  description: {
    text:  "There is no hope of ever touching grass playing this game",
  },
  button1: {
    text: "Play again",
    nextSceneIndex: 1,
  },

  button2: {
    text: "Return to Menu",
    nextSceneIndex: 0,
  },
},
//scene 18 Chose to become healthy, introduction to inventory system
{
  text: "The best way of becoming healthy is to exercise and have a healthy diet.",
  description: {
    text:  "Invest in equipment for a home gym or get a gym membership?",
  },
  button1: {
    text: "Home gym",
    nextSceneIndex: 0,
  },

  button2: {
    text: "Public gym",
    nextSceneIndex: 19,
  },
},
//Scene 19 ending decider gym
{
  text: "Fast forward 6 months, you have lost significant weight and is feeling good and more confident",
  description: {
    text:  "You go out for a jog and happen to swing by the gym, you see a gorgeous woman inside",
  },
  button1: {
    text: "Go in and talk to her",
    nextSceneIndex: 20,
  },

  button2: {
    text: "Move on",
    nextSceneIndex: 0,
  },
},
//Scene 20 gym ending
{
  text: " ",
  description: {
    text:  " ",
  },
  button1: {
    text: " ",
    nextSceneIndex: 0,
  },

  button2: {
    text: " ",
    nextSceneIndex: 0,
  },
},
];
