const getElemet = (id) => document.getElementById(id);

const queryElement = (id) => document.querySelector(id);

const generateContent = (textTask, taskID) => {
  let content = `
  <li>
    <span>${textTask}</span>
    <div class="buttons">
      <button class="remove" onclick="deteleTask(${taskID})">
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="complete" onclick = "changeStatus(${taskID})">
        <i class="far fa-check-circle"></i>
        <i class="fas fa-check-circle"></i>
      </button>
    </div>
  </li>
  `;
  return content;
}

const renderData = (array) => {

  const uncompletedTask = array.filter((task) => task.status === "todo");

  const completedTask = array.filter((task) => task.status === "completed");

  const uncompletedHTML = uncompletedTask.reduce((contentHTML, task) => contentHTML += generateContent(task.textTask, task.id), "");

  const completedHTML = completedTask.reduce((contentHTML, task) => contentHTML += generateContent(task.textTask, task.id), "");

  getElemet("todo").innerHTML = uncompletedHTML;
  getElemet("completed").innerHTML = completedHTML;
}

export { getElemet, queryElement, renderData };