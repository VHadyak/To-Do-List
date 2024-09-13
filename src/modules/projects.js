
// Module for handling projects
import { updateSelectOptions } from "./dom";

let idCounter = 0;

export const projectArr = []; 
class Project {
  constructor(name) {
    this.name = name;                
    this.items = [];      // Create empty array for each project to store each task
    this.id = idCounter++;
  };

  addTask(task) {
    this.items.push(task);
  };
};

export function createProject(title) {
  const projectObj = new Project(title);
  projectArr.push(projectObj);

  console.log(projectArr);
};

// Make sure project name matches with path selected in task dialog
export function checkPath(path, task) {
  const project = projectArr.find(p => p.name === path);    

  // If they match, attach the task to corresponding path array
  if (project) {
    project.addTask(task);
    //console.log(project);
  };
};

export function deleteProject(btn) {
  const projectUI = btn.parentElement;
  const projectId = projectUI.getAttribute("data-id");
  const index = projectArr.findIndex(i => i.id == projectId);
  
  // Ensures item exist in an array before removing it
  if (index !== -1) {
    projectArr.splice(index, 1);
  };
  projectUI.remove();

  // Update options/paths from select input
  updateSelectOptions();
  
  console.log(projectArr);
};





