import axios from "axios";

const TASKS_SERVICE_BASE_URL = "http://localhost:4000/api/tasks";

class TasksService {
  getTasks = () => {
    return axios.get(TASKS_SERVICE_BASE_URL);
  };
  addTask = (task) => {
    return axios.post(TASKS_SERVICE_BASE_URL, task);
  };
  getTasksByAssignee = (assignee) => {
    return axios.get(TASKS_SERVICE_BASE_URL + "/" + assignee);
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new TasksService();
