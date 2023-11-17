/**
 * Event listener for the "DOMContentLoaded" event.
 * @param {Event} event - The DOMContentLoaded event.
 */
window.addEventListener("DOMContentLoaded", main);
/**
 * The main function that initializes and renders the game.
 */
function main() {
	resetInventory();
	renderInventory();
	renderScene();
	console.log(inventory);

}
/**
 * Represents a new inventory item.
 * @typedef {Object} InventoryItem
 * @property {string} itemName - The name of the item.
 */
/** @type {InventoryItem} */
const newItem1 = {
	itemName: "Gym Membership Card"
};
const newItem2 = {
	itemName: "Self awareness"
};
/**
 * Resets the inventory based on the active scene index.
 */
function resetInventory() {
	if (activeSceneIndex === 0 || activeSceneIndex === 1) {
		inventory = [];
	}
	saveInventory();
}
/**
 * Renders the inventory in the DOM.
 */
function renderInventory() {
	const currentInventory = document.getElementById("inventoryItems");
	currentInventory.textContent = inventory.map(item => item.itemName);
	
}
/**
 * Checks if the "Gym Membership Card" is in the inventory.
 * @returns {boolean} - True if the card is in the inventory, otherwise false.
 */
function checkInventory() {
	renderInventory();
	return inventory.some(item => item.itemName === "Gym Membership Card");
}
function checkInventory2() {
  renderInventory();
  return inventory.some(item => item.itemName === "Self awareness");
}
/**
 * Renders the current scene in the DOM.
 */
function renderScene() {
	const scene = scenes[activeSceneIndex];
	const text = document.getElementById("text");
	const description = document.getElementById("description");
	const btn1 = document.getElementById("btn-1");
	const btn2 = document.getElementById("btn-2");
	/**
	 * Navigates to the next scene based on the provided scene index.
	 * @param {number} sceneIndex - The index of the next scene.
	 */
	function goToNextScene(sceneIndex) {
		activeSceneIndex = sceneIndex;
		resetInventory();
		renderInventory();
		localStorage.setItem("CurrentSceneIndex", activeSceneIndex);
		renderScene();
		console.log(activeSceneIndex);
		console.log(inventory);
	}
	//Event handler for button 1 click
	btn1.onclick = function() {
		if (activeSceneIndex < 19 || activeSceneIndex > 19) {
			goToNextScene(scene.button1.nextSceneIndex);
		} else {
			const hasGymMembershipCard = checkInventory("Gym Membership Card");
			if (hasGymMembershipCard) {
				goToNextScene(scene.button1.nextSceneIndex);
			} else {
				window.alert("You need the 'Gym Membership Card' to proceed!");
			}
		}
		if (activeSceneIndex === 21) {
			if (checkInventory("Self awareness")) {} else {
				inventory.push(newItem2);
				renderInventory();
				window.alert("You have gained 'Self awareness'")
				saveInventory();
			}
		}
	};
	//Event handler for button 2 click
	btn2.onclick = function() {
		if (activeSceneIndex < 21 || activeSceneIndex > 21) {
      goToNextScene(scene.button2.nextSceneIndex); 
     } else {
      const hasSelfAwareness = checkInventory2("Self awareness");
      if (hasSelfAwareness) {
        goToNextScene(scene.button2.nextSceneIndex);
      } else {
        window.alert("You need 'Self awareness' to proceed!");
      }
     }
		if (activeSceneIndex === 19) {
			if (checkInventory("Gym Membership Card")) {} else {
				inventory.push(newItem1);
				renderInventory();
				window.alert("you have gained 'Gym Membership Card'")
				saveInventory();
			}
		}
	};
	// Update DOM elements with scene information
	text.textContent = scene.text;
	btn1.textContent = scene.button1.text;
	btn2.textContent = scene.button2.text;
	description.textContent = scene.description.text;
	// Update cat images based on the active scene index
	const catImages = document.getElementsByClassName("divIdentifier");
	if (activeSceneIndex === 15) {
		for (const catImage of catImages) {
			catImage.classList.add("sadCatImage");
		}
	} else if (activeSceneIndex < 15 || activeSceneIndex > 15) {
		for (const catImage of catImages) {
			catImage.classList.remove("sadCatImage");
		}
	}
	// Update background color based on the active scene index
	if (activeSceneIndex > 0) {
		const element = document.getElementById("bodyMain");
		element.classList.remove("setBackgroundColorWhite")
		element.classList.add("changeBackgroundColor");
	}
	if (activeSceneIndex === 0) {
		const element = document.getElementById("bodyMain");
		element.classList.remove("changeBackgroundColor")
		element.classList.add("setBackgroundColorWhite");
	}
	if (activeSceneIndex === 15) {
		for (const catImage of catImages) {
			catImage.classList.add("sadCatImage");
		}
	} else {
		for (const catImage of catImages) {
			catImage.classList.remove("sadCatImage");
		}
	}
}