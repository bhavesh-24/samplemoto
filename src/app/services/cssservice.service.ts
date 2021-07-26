import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssserviceService {
  private removeBGEmitter: any
  constructor() {
    this.removeBGEmitter = new EventEmitter();
   }

   public emitRemoveBG() {
     this.removeBGEmitter.emit('removeMainBG');
   }

   public get getMainBGEmitter() {
     return this.removeBGEmitter;
   }

   public emitAddBG() {
     return this.removeBGEmitter.emit('addMainBG');
   }
}
