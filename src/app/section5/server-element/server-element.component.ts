import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // argument given to @Input decorator is the alias for the property name
  @Input('srvElement') element: {type: string, name: "string", }

  constructor() { }

  ngOnInit() {
  }

}
