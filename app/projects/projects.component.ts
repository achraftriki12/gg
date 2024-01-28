import {Component, EventEmitter, Input, Output} from '@angular/core';
import { project } from 'src/app/modell/project';
import { consultant } from 'src/app/modell/consultant';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

    selectedConsultantId!: number | undefined;
    selectedProjectId!: number | undefined;
    @Input() projects!: project[];
    @Input() consultants!: consultant[];
    @Output() assignProjectEvent = new EventEmitter<any>();


    constructor() {
    }

    assignProject() {
        if (this.selectedConsultantId && this.selectedProjectId) {

            this.assignProjectEvent.emit({
                selectedConsultantId: this.selectedConsultantId,
                selectedProjectId: this.selectedProjectId
            });
        }
    }
}
