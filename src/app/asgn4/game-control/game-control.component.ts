import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  time: number = 0;
  @Output() timerElapsed = new EventEmitter<{currentTime: number}>();
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.timerElapsed.emit({currentTime: this.time++});
      console.log(this.time);
    },
    1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }

}
