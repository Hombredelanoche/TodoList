const getTask = document.querySelector("#task");
const setTask = document.querySelector(".newTask");
const createTask = document.querySelector(".createTask");

createTask.onclick = function () {
  if (getTask.value != "") {
    // Si le champs n'est pas vide alors je crée une balise div
    let todoDiv = document.createElement("div");
    alert("Votre tâche à bien été créer.");
    todoDiv.innerText = getTask.value; // Je valorise ma div

    todoDiv.classList.add("todoDivStyle"); // Ajout de classe

    setTask.appendChild(todoDiv); // Placement de la div dans le DOM

    getTask.value = ""; // Vider l'input #task

    todoDiv.addEventListener("click", function () {
      // ChangeCOlor et barrer la task
      todoDiv.classList.add("taskFinish");
    });

    todoDiv.addEventListener("dblclick", function () {
      // Supprimer la div
      setTask.remove(todoDiv);
    });
  }
};
