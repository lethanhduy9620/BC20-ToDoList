export default class TaskService {
    getTaskListApi() {
        return axios({
            url: "https://6183cae691d76c00172d1b55.mockapi.io/api/BC20_BT-Axios-ToDoList",
            method: "GET",
        });
    }

    getTaskApi(id) {
        return axios({
            url: `https://6183cae691d76c00172d1b55.mockapi.io/api/BC20_BT-Axios-ToDoList/${id}`,
            method: "GET",
        });
    }

    addTaskApi(task) {
        return axios({
            url: "https://6183cae691d76c00172d1b55.mockapi.io/api/BC20_BT-Axios-ToDoList",
            method: "POST",
            data: task,
        });
    }

    updateTaskApi(id, task) {
        return axios({
            url: `https://6183cae691d76c00172d1b55.mockapi.io/api/BC20_BT-Axios-ToDoList/${id}`,
            method: "PUT",
            data: task,
        });
    }

    deleteTaskApi(id) {
        return axios({
            url: `https://6183cae691d76c00172d1b55.mockapi.io/api/BC20_BT-Axios-ToDoList/${id}`,
            method: "DELETE",
        });
    }

}