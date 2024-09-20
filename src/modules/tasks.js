
// Module for handling tasks
import { updateTaskDOM } from "./dom";
import { checkProject } from "./projects";
import { projectArr } from "./projects";
import { getNextId, releaseId } from "./idTaskManager";

export const taskArr = [];
class Task {
  constructor(title, description, date, priority, path, projectID = 0) { 
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.path = path;
    this.id = getNextId();
    // Use this for handling identical named projects. If task id NaN, then assign 0
    this.projectID = isNaN(Number(projectID)) ? 0 : Number(projectID); 
  };
};

export function createTask(title, description, date, priority, path, projectID) {
  const task = new Task(title, description, date, priority, path, projectID);
  
  checkProject(projectID, task);     // Check if project exists or not while creating a task
  taskArr.push(task);             // store all the tasks in taskArr

  console.log(taskArr);
  console.log(projectArr);

  return task;
};

export function deleteTask(item) {
  const taskUI = item.closest(".task");  // Select element with task class
  const taskID = Number(taskUI.dataset.id);
  const taskIndex = taskArr.findIndex(task => task.id === taskID);
  const task = taskArr[taskIndex];

  // Remove task from taskArr
  taskArr.splice(taskIndex, 1);

  // If project has the task, remove that task from projectArr
  const projectIndex = projectArr.findIndex(p => p.id === task.projectID);
  if (projectIndex !== -1) {
    const project = projectArr[projectIndex];
    const projectTaskIndex = project.items.findIndex(task => task.id === taskID);
    project.items.splice(projectTaskIndex, 1);
  };

  taskUI.remove();
  // Release to reuse it later
  releaseId(taskID);

  console.log(taskArr);
  console.log(projectArr);
};

export function editTask(title, description, date, priority, path, newProjectID, taskID) {
  const index = taskArr.findIndex(task => task.id === Number(taskID));
  const task = taskArr[index];

  task.title = title;
  task.description = description;
  task.date = date;
  task.priority = priority;
  task.path = path;

  // Handle the case where edited task is not yet in the newly created project
  if (task.projectID !== newProjectID) {
    const newProject = projectArr.find(project => project.id === Number(newProjectID));
    const oldProject = projectArr.find(project => project.id === task.projectID);
    
    // Remove task from old project after changing task path
    if (oldProject) {
      const taskIndexInOldProject = oldProject.items.findIndex(t => t.id === Number(taskID))
      if (taskIndexInOldProject !== -1) {
        oldProject.items.splice(taskIndexInOldProject, 1);
      };
    };

    // Add the edited task to the new project
    if (newProject) {
      if (!newProject.items.some(project => project.id === Number(taskID))) {
        newProject.addTask(task);
        task.projectID = Number(newProjectID);
      };
    };
  };
  updateTaskDOM(title, date, priority, taskID);

  console.log(taskArr); 
  console.log(projectArr);
};