import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberEmitter:EventEmitter<number>=new EventEmitter<number>();
  num:number=0;
  numberGenerator;
  constructor() { }

  ngOnInit() {
  }

  startGame(){
    var self=this;
    self.numberGenerator=setInterval(function(){
      self.numberEmitter.emit(self.num);
      self.num++;
    },1000);
  }

  stopGame(){
    clearInterval(this.numberGenerator);
    this.num=0;
  }
}