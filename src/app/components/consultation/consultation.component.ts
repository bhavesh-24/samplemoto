import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CssserviceService } from 'src/app/services/cssservice.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consultForm:FormGroup;
  constructor(private cssService:CssserviceService) {
    this.cssService.emitRemoveBG();
   }

  ngOnInit(): void {
    this.consultForm = new FormGroup({
      personName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      city: new FormControl('')
    });
  }

}
