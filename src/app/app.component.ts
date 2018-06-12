import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  monsterName:string = 'kaiju';
  monsterPower: number;

  monster:any[]=[
    {

      monsterName:'kaiju',
      monsterPower: null
    },
    {

      monsterName:'smaug',
      monsterPower:null
    }
    
  ];
  monsterSelected;
  ngOnInit(){


  }
  pickMonster(){
    const index = Math.floor(Math.random()* this.monster.length);
    this.monsterSelected = this.monster[index];
  }

  generatePower(){
   this.monsterSelected.monsterPower = Math.floor(Math.random()*1000);

  }
}
