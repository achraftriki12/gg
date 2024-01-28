import { Injectable } from '@angular/core';
import {projectall} from "../modell/projectall";
import {project} from "../modell/project";
import {consultant} from "../modell/consultant";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private projectsall!: projectall[];


  constructor() {
    this.projectsall =[];
  }

  addToProjectsAll(project :project , consultant :consultant):projectall[] {
    const projectAllInstance = new projectall(project, consultant);
    this.projectsall.push(projectAllInstance);
    return (this.projectsall)
  }
}
