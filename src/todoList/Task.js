/* eslint-disable no-param-reassign */
const Task = (title, description, dueDate, priority, isDone) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getIsDone = () => isDone;

  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const toggleIsDone = () => {
    isDone = !isDone;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    isDone,

    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getIsDone,

    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toggleIsDone,
  };
};

export default Task;
