import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'monster',
    templateUrl:'./monster.component.html',
    styleUrls:['./../app.component.css']

})

export class MonsterComponent implements OnInit{

@Input()heroPower:number;

//this is for the second part of monster-fight projec
@Output()left = new EventEmitter<number>();

life:number;
lifeTwo:number;
 
monsters:any[]=[
    {

      monsterName:'Kaiju',
      monsterPower: null
    },
    {

      monsterName:'Smaug',
      monsterPower:null
    }
    
  ];
  monsterSelected;
  ngOnInit(){
    this.pickMonster();


  }
  pickMonster(){
    const index = Math.floor(Math.random()* this.monsters.length);
    this.monsterSelected = this.monsters[index];
  }

  generatePower(){

    this.monsterSelected.monsterPower = Math.floor(Math.random()*500);
    
   }

   remainingPower(){
      this.left.emit(this.heroPower - this.monsterSelected.monsterPower  );
      this.life = this.heroPower - this.monsterSelected.monsterPower;

      this.lifeTwo = this.life - this.monsterSelected.monsterPower;

     console.log(this.life);
   }
  

}