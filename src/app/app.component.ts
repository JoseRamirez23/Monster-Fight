import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  title = 'app';
  //we use this on monster
  // monsterName:string = 'kaiju';
  // monsterPower: number;
  savedLeftNum: number;

 heroPower:number;

  ngOnInit(){

  }

  whatsHeroPower(recievePower:number){
    this.heroPower = recievePower;

  }

  leftNum(leftNum) {
    this.savedLeftNum = leftNum;
    console.log(this.savedLeftNum);
  }
  
  
}
