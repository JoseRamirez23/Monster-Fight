import { Component, OnInit,Output,EventEmitter } from "@angular/core";




@Component({
    selector:'hero',
    templateUrl:'./hero.component.html',
    styleUrls:['./../app.component.css']

})

export class HeroComponent implements OnInit{

ngOnInit(){

}

hero:any={

    name:'',
  };
  

  @Output() heroPower = new EventEmitter<number>();

generateheroPower(){

    this.hero.power = Math.floor(Math.random()*550);

    this.heroPower.emit(this.hero.power);
  }

}