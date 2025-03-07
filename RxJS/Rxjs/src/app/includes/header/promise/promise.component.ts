import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent implements OnInit {

  proVal:any;

  // DellAvailable() {
  //   return true;
  // }
  // HpAvailable() {
  //   return false;
  // }

  ngOnInit(): void {
    //  let buyLaptop = new Promise(function( resolve, reject){
    //      resolve('Promise is resolved');
    //  });

    // let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');

      // // reject('rejected')
      // if (this.DellAvailable()) {
      //   return setTimeout(() => {
      //     resolve('Dell is Purchased')
      //   }, 3000)
      // } else if (this.HpAvailable()) {
      //   return setTimeout(() => {
      //     resolve('HP is Purchased')
      //   }, 3000)
      // } else {
      //   return setTimeout(() => {
      //     reject('Not purchesed');
      //   }, 3000)

      // }
    // });

    // buyLaptop.then(res => {
    //   console.log('Success');
    //   this.proVal = res;
    //   console.log(res);

    // }).catch(res => {
    //   console.log(res);
    //   this.proVal = res;

    // })
  }

  myFunction() {
    console.log('fun called');
  }



}
