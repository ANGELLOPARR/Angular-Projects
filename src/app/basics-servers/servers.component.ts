import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class BasicsServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'No server has been created';
  serverName: string;
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer 2']

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
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
