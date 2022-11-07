import { Component } from "@angular/core";
import { Entity } from "src/app/main/interfaces/entity.interface";
import { EntityService } from "src/app/main/services/entity.service";

@Component({
    selector: 'app-homeclient',
    templateUrl: './homeclient.component.html',
    styleUrls: ['./homeclient.component.css']
  })
export class HomeClientComponent {

  displayedColumns: string[] = ['id', 'businessName', 'state', 'documentId', 'taxpayerId'];
  dataSource: Entity[] = [];

  constructor(private entityService: EntityService) {
    this.entityService.getAllEntities().subscribe( data => {
      this.dataSource = data.result.content;
      console.log(data.result.content);
    })
  }
  
    
}