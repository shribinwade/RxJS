import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(val:string,containerID:string){
    let el = document.createElement('li');
    el.innerText =val;

    document.getElementById(containerID)?.appendChild(el);
  }

}
