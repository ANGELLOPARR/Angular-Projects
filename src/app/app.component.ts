import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddList: number[] = [];
  evenList: number[] = [];

  onTimerElapsed(eventData: {currentTime: number}) {
    if (eventData.currentTime % 2 == 0) {
      this.evenList.push(eventData.currentTime);
    }
    else {
      this.oddList.push(eventData.currentTime);
    }
  }

  /* Section 5 code.
  serverElements = [{type: "server", name: "TestServer", content: "test"}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name="newly changed name."
  }

  onDeleteFirst() {
    this.serverElements.splice(0, 1);
  }
  */
}
