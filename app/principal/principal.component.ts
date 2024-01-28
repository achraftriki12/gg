import {Component, OnInit} from '@angular/core';
import {project} from "../modell/project";
import {consultant} from "../modell/consultant";
import {PrincipalService} from "../principal.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  projects!: project[];
  consultants!: consultant[];
  selectedConsultant!: consultant | undefined ;
  selectedProject!: project | undefined  ;


  constructor( private principal_service : PrincipalService ) {
  this.projects =[];
  this.consultants= [];}

  ngOnInit() {
    this.projects= this.principal_service.getprojects();
    this.consultants= this.principal_service.getconsultants();
  }



  assignProject (event: { selectedConsultantId: number, selectedProjectId: number }): void {

    this.selectedProject =this.principal_service.findProjectById(event.selectedProjectId) ;
    this.selectedConsultant = this.principal_service.findConsultantById(event.selectedProjectId) ;
  }

}
