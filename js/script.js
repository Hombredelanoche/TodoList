function createTask() {
  const task = document.querySelector("#task").value;
  if (task === "") {
    console.log("Something didn't worked");
  } else {
    document.querySelector(
      ".remainingTask"
    ).innerHTML += `<article class='taskContainer'><div class='newTask'> ${task} </div> <button class='deleteTask' onclick='deleteTask()'><i class="fa-solid fa-trash"></i></button></article>`;
  }
}

function deleteTask() {
  document.querySelector(".taskContainer").innerHTML = "";
}
