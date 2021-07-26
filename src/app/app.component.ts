import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CssserviceService } from './services/cssservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('menuOverlayRef') menuOverlayRef: ElementRef;
  @ViewChild('menuIconDiv') menuIconDivRef: ElementRef;
  @ViewChild('mainAppDiv') mainAppDivRef: ElementRef;

  title = 'samplemoto';

  constructor(private cssService: CssserviceService, private _sanitizer: DomSanitizer) {
    this.cssService.getMainBGEmitter.subscribe(item => {
      if(item == 'addMainBG'){
        console.log('Inside Add');
        this.addMainAppBG();
      }
      else {
        this.removeMainAppBG();
      }
    });
    console.log("cam back to home")
  }

  ngOnInit() {    
  }

  getfilters() {
    return this._sanitizer.bypassSecurityTrustStyle('filter: invert(96%) sepia(5%) saturate(351%) hue-rotate(174deg) brightness(91%) contrast(87%)');
  }

  openNav() {
    console.log('Inside openNav func');
    this.menuIconDivRef.nativeElement.style.display = 'none';
    this.menuOverlayRef.nativeElement.style.width = "100%";

  }

  onCloseOverlay() {
    console.log('Inside closeNav func');
    this.menuIconDivRef.nativeElement.style.display = 'block';
    this.menuOverlayRef.nativeElement.style.width = "0%";
  }

  removeMainAppBG() {
    console.log('coming in remove main bg');
    this.mainAppDivRef.nativeElement.style.backgroundImage = "none";
    this.menuIconDivRef.nativeElement.style.filter = this.getfilters;
  }

  addMainAppBG() {
    console.log('adding main bg');
    this.mainAppDivRef.nativeElement.style.backgroundImage = "url('/assets/images/backgrounds/superduke-home-web-1700.jpg')";
  }
}
