import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createServer = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreate') createBlueprint = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.createServer.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.createBlueprint.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContent.nativeElement.value
    })
  }

}
