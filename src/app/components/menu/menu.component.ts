import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() public closeOverlay = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  closeNav() {
    console.log("coming inside")
    this.closeOverlay.emit('close');
  }

}
