/**
 * Saves the current inventory to localStorage.
 */
function saveInventory() {
	localStorage.setItem("inventory", JSON.stringify(inventory));
}
/**
 * Represents a new inventory item with an initial empty name.
 * @typedef {Object} InventoryItem
 * @property {string} itemName - The name of the item.
 */

/**
 * Loads the inventory from localStorage or initializes it as an empty array.
 * @type {InventoryItem[]}
 */
let inventory = JSON.parse(localStorage.getItem("inventory")) || [{
	itemName: ""
}, ];

/**
 * The index of the currently active scene.
 * @type {number}
 */
let activeSceneIndex = parseInt(localStorage.getItem("CurrentSceneIndex")) || 0;

/**
 * Represents a scene in the game.
 * @typedef {Object} Scene
 * @property {string} text - The main text of the scene.
 * @property {Object} description - The description of the scene.
 * @property {string} description.text - The text describing the scene.
 * @property {Object} button1 - The first button in the scene.
 * @property {string} button1.text - The text on the first button.
 * @property {number} button1.nextSceneIndex - The index of the next scene when the first button is clicked.
 * @property {Object} [button1.condition] - Optional condition for the button to be displayed.
 * @property {Object} button2 - The second button in the scene.
 * @property {string} button2.text - The text on the second button.
 * @property {number} button2.nextSceneIndex - The index of the next scene when the second button is clicked.
 * @property {Object} [button2.condition] - Optional condition for the button to be displayed.
 */

/**
 * The array of scenes in the game.
 * @type {Scene[]}
 */
const scenes = [{
		text: "Welcome to Touch grass the game!",
		description: {
			text: "The objective of this game is to successfully integrate into society",
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
	//scene 1 Waking up
	{
		text: "You wake up after 5h of low quality caffeine-infused sleep",
		description: {
			text: "your first instinct is to...",
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
	// scene 2 Game choice
	{
		text: "World of Warcraft or Dota 2? you ask yourself",
		description: {
			text: "",
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
	// scene 3 Kitchen decision
	{
		text: "You walk into the kitchen",
		description: {
			text: "What do you make to eat?",
		},
		button1: {
			text: "A full english breakfast",
			nextSceneIndex: 4,
		},
		button2: {
			text: "A can of mountain dew will have to suffice.",
			nextSceneIndex: 5,
		},
	},
	//Scene 4 First death, food choice
	{
		text: "You have died.",
		description: {
			text: "Due to the sudden chock from consuming actual nutritious food, your heart gives up.",
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
			text: "What do you decide to do?",
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
		text: "Let's play some Dota 2",
		description: {
			text: "Being the epitome of masculinity that you are, there is no role but position 1 (Hard carry) for you. What character do you play?",
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
			text: "Your support talks to you about strategies using voice chat, turns out, she's a woman! How do you respond?",
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
			text: "She leaves the game, making your team lose. What do you do?",
		},
		button1: {
			text: "Learn from your mistakes",
			nextSceneIndex: 21,
		},
		button2: {
			text: "Play another game of Dota 2",
			nextSceneIndex: 6,
		},
	},
	//Scene 9 The romance path
	{
		text: "Your strategies allows your team to win",
		description: {
			text: "Impressed by your skills, the woman adds you as a friend and asks if you want to play another game. How do you respond?",
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
	//Scene 10 romanting path choice decider
	{
		text: "Fast forward 3 months. You and the woman have been chatting consistently on discord and you find out she does not live far away",
		description: {
			text: "You end up asking her out on a date, where do you take her? ",
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
			text: "You have acquired a gamer-girlfriend",
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
			text: "You were blissfully anaware that the fancy dinner composed of cheap wine and Steak with fries was contaminated by a deadly amount of E.coli. Should have learnt food safety precautions",
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
			text: "How do you feel emotionally?",
		},
		//Survival path
		button1: {
			text: "Furious",
			nextSceneIndex: 14,
		},
		//Rampage path
		button2: {
			text: "I'm fine...(not really)",
			nextSceneIndex: 21,
		},
	},
	//Scene 14 Rampage path
	{
		text: "You have died.",
		description: {
			text: "Boiling in anger, you posted some regrettable things on 4chan and got raided by the secret police.",
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
			text: " ",
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
		text: "Freaking sniper pickers man",
		description: {
			text: "Makes me SICK",
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
			text: "There is no hope of ever touching grass playing this game",
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
			text: "Work out at home or get a gym membership?",
		},
		button1: {
			text: "Home gym",
			nextSceneIndex: 19,
		},
		button2: {
			text: "Public gym",
			nextSceneIndex: 19,
		},
	},
	//Scene 19 ending decider gym
	{
		text: "After 6 months of working out, improving your confidence, you take a stroll and walk by the gym",
		description: {
			text: "You see a gorgeous woman inside, what do you do?",
		},
		button1: {
			text: "Go in and talk to her",
			nextSceneIndex: 20,
			condition: () => checkInventory("Gym Membership Card")
		},
		button2: {
			text: "Move on",
			nextSceneIndex: 0,
		},
	},
	//Scene 20 public gym ending
	{
		text: "Congratulations! you have successfully touched grass!",
		description: {
			text: "Good thing you had a gym membership card. You became best friends with the woman",
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
	//Scene 21 surviving the rejection
	{
		text: "The rejection made you take a deeper look within",
		description: {
			text: "You decide to try to improve your social skills",
		},
		button1: {
			text: "Watch youtube videos on how to pick up girls",
			nextSceneIndex: 23,
		},
		button2: {
			text: "Go outside and learn to socialise",
			nextSceneIndex: 22,
			condition: () => checkInventory2("Self awareness")
		},
	},
	//Scene 22 friends ending
	{
		text: "Congratulations! you have successfully touched grass!",
		description: {
			text: "Luckily you had 'self awareness', Socialising allowed you to make wonderful friends",
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
	//Scene 23 how to pick up girls ending
	{
		text: "Trying out your new pickup techniques in real life only lead to rejections and humilation",
		description: {
			text: "you isolate yourself from the outside world. You have failed to touch grass",
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
];