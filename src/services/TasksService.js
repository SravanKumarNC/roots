import axios from "axios";

const TASKS_SERVICE_BASE_URL =
  "https://roots-backend-4f5g.onrender.com/api/tasks";

class TasksService {
  getTasks = () => {
    return axios.get(TASKS_SERVICE_BASE_URL);
  };
  getPaginatedData = (pageNumber) => {
    return axios.get(
      TASKS_SERVICE_BASE_URL + `/paginatedData?page=${pageNumber}`
    );
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
