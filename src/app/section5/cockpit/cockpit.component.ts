import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createServer = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() createBlueprint = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.createServer.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.createBlueprint.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent
    })
  }

}
