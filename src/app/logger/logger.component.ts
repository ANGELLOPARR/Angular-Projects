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
  //logNumber: number = 1;
  logArray: Array<Date> = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails() {
    this.visible = !this.visible;
    this.logArray.push(new Date());
  }

}
