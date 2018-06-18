import { Component, OnInit, Input } from "@angular/core";


@Component({
    selector:'monster',
    templateUrl:'./monster.component.html',
    styleUrls:['./../app.component.css']

})

export class MonsterComponent implements OnInit{

@Input()heroPower:number;

//this is for the second part of monster-fight projec
left : number;
 
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
      this.left = this.heroPower - this.monsterSelected.monsterPower ;
     console.log(this.left);
   }
  

}