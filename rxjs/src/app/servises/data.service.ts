import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  print(val: any, containerId: string){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el)
  }
}
