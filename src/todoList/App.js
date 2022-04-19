import Task from "./Task";
import Project from "./Project";

const App = () => {
  // constructor
  let projects = [];
  const todayProject = Project("Today");
  const thisWeekProject = Project("This week");

  const getProjects = () => projects;
  const setProjects = (newProjects) => {
    projects = newProjects;
  };

  const getProjectByName = (projectName) =>
    projects.find((project) => project.getName() === projectName);

  const contains = (projectName) =>
    projects.some((project) => project.getName() === projectName);

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (projectName) => {
    projects = projects.filter((project) => project.name !== projectName);
  };

  const updateTodayProject = () => {
    todayProject.clear();
    projects.forEach((project) => {
      todayProject.concat(project.getTodayTasks());
    });
  };

  const updateThisWeekProject = () => {
    thisWeekProject.clear();
    projects.forEach((project) => {
      thisWeekProject.concat(project.getThisWeekTasks());
    });
  };

  return {
    projects,
    getProjects,
    setProjects,
    getProjectByName,
    contains,
    addProject,
    removeProject,

    updateTodayProject,
    updateThisWeekProject,
  };
};

export default App;
