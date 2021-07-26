import { Component, OnInit } from '@angular/core';
import { CssserviceService } from 'src/app/services/cssservice.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private cssService:CssserviceService) {
    this.cssService.emitRemoveBG();
   }

  ngOnInit(): void {
  }

}
