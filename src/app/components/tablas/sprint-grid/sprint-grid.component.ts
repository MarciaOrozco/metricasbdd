import { Component, OnInit } from '@angular/core';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-sprint-grid',
  templateUrl: './sprint-grid.component.html',
  styleUrls: ['./sprint-grid.component.css']
})
export class SprintGridComponent implements OnInit {

  public sprints: any[] = [];

  constructor(private sprintsService: SprintService) { }

  ngOnInit(): void {
    this.getSprints();
  }

  public getSprints(){
    this.sprintsService.getSprints().subscribe(data => {
      if(data){
        this.sprints = data;
      }
    });
  }

}
