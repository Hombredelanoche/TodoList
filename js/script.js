function createTask() {
  const task = document.querySelector("#task").value;
  if (task === "") {
    console.log("Something didn't worked");
  } else {
    document.querySelector(".newTask").innerHTML +=
      "<span class='available' onclick='taskDone()'>" + task + "</span>";
    alert(`${task} à bien été ajouter à votre liste`);
    document.querySelector("#task").value = "";
  }
}

function taskDone() {
  let task = document.querySelector(".available");
  for (let i = 0; i < task; i++) {
    let getTask = task[i];
    getTask.classList.add("taskFinish");
  }
}
