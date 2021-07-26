import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CssserviceService } from 'src/app/services/cssservice.service';

@Component({
  selector: 'app-bikelist',
  templateUrl: './bikelist.component.html',
  styleUrls: ['./bikelist.component.scss']
})
export class BikelistComponent{
  
  constructor(private cssService:CssserviceService) {
    this.cssService.emitRemoveBG();
   }
 

}
