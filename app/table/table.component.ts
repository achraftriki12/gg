import {Component, Input, OnInit} from '@angular/core';
import {project} from "../modell/project";
import {consultant} from "../modell/consultant";
import {projectall} from "../modell/projectall";
import {PrincipalService} from "../principal.service";
import {TableService} from "./table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() selectedproject!: project ;
  @Input() selectedconsultant!: consultant ;
  projectsall!: projectall[] ;


  constructor(private table_service : TableService)   {
    this.projectsall =[]
  ;}
  ngOnInit() {
    this.projectsall=this.table_service.addToProjectsAll(this.selectedproject, this.selectedconsultant)
    console.log(this.projectsall)
  }
  deleteProjectall(index: number): void {
    this.projectsall.splice(index, 1);
  }




}
