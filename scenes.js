let activeSceneIndex = 0;
const scenes = [
  {
    background: "red",

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
      nextSceneIndex: 2,
    },
  },
  {
    background: "black",
    text: "You wake up after 5h of low quality caffeine-infused sleep",
    description: {
      text:  "your first instinct is to...",
    },
    button1: {
      text: "Start the PC",
      nextSceneIndex: 1,
    },
    button2: {
      text: "Make breakfast",
      nextSceneIndex: 2,
    },
  },
];
