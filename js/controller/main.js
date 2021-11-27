import Task from "./../model/task.js";
import TaskService from "./../model/task-service.js";
import { getElemet, queryElement, renderData } from "../view/index.js";
import Validation from "./../model/validation.js";

const taskService = new TaskService();

const validation = new Validation();

let listTask = [];
let isLoading = false;

var checkLoading = (isLoading) => {
    if (isLoading) {
        queryElement("html").classList.add("pending");
    }
    else {
        queryElement("html").classList.remove("pending");
    }
}

const getListTask = () => {
    getElemet("alertNewTask").innerHTML = "";
    isLoading = true;
    checkLoading(isLoading);
    taskService.getTaskListApi()
        .then((result) => {
            renderData(result.data);
            listTask = result.data;
            isLoading = false;
            checkLoading(isLoading);
        })
        .catch((error) => {
            console.log(error);
            isLoading = false;
            checkLoading(isLoading);
        });
}

getListTask();

const getTaskInput = () => {
    let id = "";
    let taskInput = getElemet("newTask").value;
    let status = "todo";
    let task = new Task(taskInput, status, id);
    return task;
}

const addTask = () => {
    let isValid = validation.checkEmpty(getElemet("newTask").value, "alertNewTask", "Please input name of the task");
    if (isValid) {
        let task = getTaskInput();
        isLoading = true;
        checkLoading(isLoading);
        taskService.addTaskApi(task)
            .then(() => {
                alert("Add Task Successfully");
                getListTask();
                isLoading = false;
                checkLoading(isLoading);
            })
            .catch((error) => {
                console.log(error);
                isLoading = false;
                checkLoading(isLoading);
            });
    }
}

getElemet("addItem").onclick = addTask;


const deteleTask = (id) => {
    isLoading = true;
    checkLoading(isLoading);
    taskService.deleteTaskApi(id)
        .then(() => {
            alert("Delete task successfully");
            getListTask();
            isLoading = false;
            checkLoading(isLoading);
        })
        .catch((error) => {
            console.log(error);
            isLoading = false;
            checkLoading(isLoading);
        });

}

window.deteleTask = deteleTask;

const getTask = (id) => {
    for (let task of listTask) {
        if (id == task.id) {
            return task;
        }
    }
}

const changeStatus = (id) => {
    let task = new Task();
    task = getTask(id);
    if (task.status == "completed") {
        task.status = "todo";
    }
    else if (task.status == "todo") {
        task.status = "completed";
    }
    isLoading = true;
    checkLoading(isLoading);
    taskService.updateTaskApi(id, task)
        .then(() => {
            alert("Successfully change task status");
            getListTask();
            isLoading = false;
            checkLoading(isLoading);
        })
        .catch((error) => {
            isLoading = false;
            checkLoading(isLoading);
            console.log(error);
        });
}

window.changeStatus = changeStatus;

