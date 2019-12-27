import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styles: [`
    .white-color {
      color: white;
    }
  `]
  //styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {
  visible: boolean = false;
  logNumber: number = 1;
  logArray: Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails() {
    this.visible = true;
    this.logArray.push(this.logNumber++);
  }

}
