window.addEventListener("DOMContentLoaded", main);

function main() {
  renderScene();
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
    const currentScene = scenes[activeSceneIndex]

    const element = document.getElementById("bodyMain");
    element.classList.add("changeBackgroundColor");

  };
  btn2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };
}

function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  renderScene();
}
