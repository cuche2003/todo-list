/* eslint-disable no-param-reassign */
import { isToday, isThisWeek, parseISO, compareAsc } from "date-fns";

const Project = (name) => {
  // helper funcs

  // name handling
  const getName = () => name;
  const setName = (newName) => {
    name = newName;
  };

  // task handling
  let tasks = [];

  const clear = () => {
    tasks = [];
  };

  const getTasks = () => tasks;

  const setTasks = (newTasks) => {
    tasks = newTasks;
  };

  const contains = (taskName) =>
    tasks.some((task) => task.getName() === taskName);

  const addTask = (newTask) => {
    tasks.push(newTask);
  };

  const removeTask = (taskName) => {
    tasks = tasks.filter((task) => taskName !== task.getName());
  };

  const sortTasks = (criteria) => {
    switch (criteria) {
      case "dueDateAsc": {
        tasks.sort((prevTask, currTask) =>
          compareAsc(
            parseISO(prevTask.getDueDate()),
            parseISO(currTask.getDueDate())
          )
        );
        break;
      }
      default: {
        tasks.sort((prevTask, currTask) =>
          compareAsc(
            parseISO(prevTask.getDueDate()),
            parseISO(currTask.getDueDate())
          )
        );
        break;
      }
    }
  };

  const getTodayTasks = () =>
    tasks.filter((task) => isToday(parseISO(task.getDueDate)));

  const getThisWeekTasks = () =>
    tasks.filter((task) => isThisWeek(parseISO(task.getDueDate)));

  return {
    name,
    getName,
    setName,

    tasks,
    clear,
    getTasks,
    setTasks,
    contains,
    addTask,
    removeTask,
    sortTasks,

    getTodayTasks,
    getThisWeekTasks,
  };
};

export default Project;
