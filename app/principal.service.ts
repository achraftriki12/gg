import { Injectable } from '@angular/core';
import {project} from "./modell/project";
import {consultant} from "./modell/consultant";

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
   private projects!: project[];
   private consultants!: consultant[];



  constructor()

  {
      this.projects = [
        new project(1, "site E commerce", "project_wen.zip", 'projet de developpement web', "Client A", new Date('2024-01-20'), new Date('2024-02-20')),
        new project(3, "FitTracker", "fitness_app.apk", 'Application mobile pour suivi de fitness', "Client B", new Date('2023-09-05'), new Date('2024-02-28')),
        new project(5, "HRMS", "hr_system.jar", 'Système de gestion des ressources humaines', "Client C", new Date('2023-07-10'), new Date('2023-11-30'))
      ];

      this.consultants = [
        new consultant(1, 'med123'),
        new consultant(3, 'olivia.miller'),
        new consultant(5, 'mia.lewis')
      ];
    }


  getprojects(): project[]
  {
      return this.projects ;
  }

  getconsultants(): consultant[]
  {
    return this.consultants ;
  }

  findProjectById(projectId: number): project | undefined
  {
      return (this.projects.find(project => project.id == projectId));
  }
  findConsultantById(consultantId: number): consultant | undefined {
      return (this.consultants.find(consultant => consultant.id == consultantId));
    }

}
