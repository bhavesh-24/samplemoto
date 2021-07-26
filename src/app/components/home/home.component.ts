import { Component, OnInit } from '@angular/core';
import { CssserviceService } from 'src/app/services/cssservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cssService:CssserviceService) {     
    if(window.innerWidth < 700) {
      this.cssService.emitRemoveBG();
    }
    else {
      this.cssService.emitAddBG();
    }    
  }

  ngOnInit(): void {
  }

}
