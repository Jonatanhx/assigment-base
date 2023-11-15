window.addEventListener("DOMContentLoaded", main);

function main() {
  resetInventory();
  renderScene();
  renderInventory();
}


const newItem1 = { itemName: "Gym Membership Card" };


function resetInventory() {
  if (activeSceneIndex === 0) {
    inventory = [];
  }
}
function renderInventory() {
  const currentInventory = document.getElementById("inventoryItems");
  currentInventory.textContent = inventory.map(item => item.itemName).join(", ");
  console.log(inventory);
}

function goToNextScene(sceneIndex) {  
  activeSceneIndex = sceneIndex;
  localStorage.setItem("CurrentSceneIndex", activeSceneIndex);

  renderScene();
  renderInventory();
  resetInventory();
  console.log(activeSceneIndex);
  }


function renderScene() {
  const scene = scenes[activeSceneIndex];
  const text = document.getElementById("text");
  const description = document.getElementById("description");
  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");
  
  btn1.onclick = function () {
    goToNextScene(scene.button1.nextSceneIndex);
  };
  btn2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };



  text.textContent = scene.text;
  btn1.textContent = scene.button1.text;
  btn2.textContent = scene.button2.text;
  description.textContent = scene.description.text;

  const catImages = document.getElementsByClassName("divIdentifier");
  if (activeSceneIndex === 15) {
    for (const catImage of catImages) {
      catImage.classList.add("sadCatImage");
    }
  } else if (activeSceneIndex < 15) {
    for (const catImage of catImages) {
      catImage.classList.remove("sadCatImage");
    }
  }
      if (activeSceneIndex > 0) {
      const element = document.getElementById("bodyMain");
      element.classList.remove("setBackgroundColorWhite")
      element.classList.add("changeBackgroundColor");
  
    } if (activeSceneIndex === 0) {
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
