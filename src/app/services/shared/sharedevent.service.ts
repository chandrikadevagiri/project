import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedeventService {
   constructor() { }
  userData = new EventEmitter<any>();
  categoryEvent: EventEmitter<any> = new EventEmitter();
  addCartEvent: EventEmitter<any> = new EventEmitter();
  productItemCountEvent: EventEmitter<any> = new EventEmitter();
}


