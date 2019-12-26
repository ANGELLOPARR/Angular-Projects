import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'No server has been created';
  serverName: string;

  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  // we name it "on..." because it makes it easier to understand that
  // the user will be calling it
  onCreateServer() {
    this.serverCreationStatus = 'Server has been created.';
    this.serverCreationStatus += ' Name is: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
