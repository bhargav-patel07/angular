import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-functions',
  templateUrl: './my-functions.component.html',
  styleUrls: ['./my-functions.component.scss']
})
export class MyFunctionsComponent implements OnInit {

  constructor() { }
  user1(){
    return false 
  }
  user2(){
    return false
  }
  promiseVal: any;

  // passing object
person1={
name:'bhargav',
lastname:'patel'
}
person2={
  name:'bhavya',
  lastname:'patel'
  }
  notavailable={
    person:'not Available'
  }
  ngOnInit(): void {

   
    let buyLaptop =new Promise((resolve, reject) =>{
      //  reject('promise is reject');
      //  resolve('promise is resolved');
      if(this.user1()){
        return setTimeout(()=>{
          // resolve('user1 is notavailable')
          resolve(this.person1)
        }, 3000)
        
      }else if(this.user2()){
        return setTimeout(()=>{
          resolve(this.person2)  
        }, 4000)
       
      }else{
        return setTimeout(()=>{
          reject(this.notavailable)
        }, 4000)
       
        
      }
    });

    buyLaptop.then(res=>{
      console.log('then code =>',res);
      this.promiseVal=res;
    }).catch(res=>{
      console.log('catch code =>',res);
      this.promiseVal=res;
    })
     
   
  }

}
