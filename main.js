window.addEventListener("DOMContentLoaded", main);


function main() {
  renderScene();
}
function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  localStorage.setItem("CurrentSceneIndex", activeSceneIndex);
  renderScene();
  console.log(activeSceneIndex)
}


function renderScene() {
  const text = document.getElementById("text");
  const description = document.getElementById("description");
  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");


  const scene = scenes[activeSceneIndex];

  text.textContent = scene.text;
  btn1.textContent = scene.button1.text;
  btn2.textContent = scene.button2.text;
  description.textContent = scene.description.text;

  btn1.onclick = function () {

    goToNextScene(scene.button1.nextSceneIndex);
  };
  btn2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };



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