import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Asgn 3
import { LoggerComponent } from './asgn3/logger/logger.component';

// Asgn 2
import { UserComponent } from './asgn2/user/user.component';

// Asgn 1
import { WarningAlertComponent } from './asgn1/warning-alert/app.warningAlert';
import { SuccessAlertComponent } from './asgn1/success-alert/success-alert.component';

// we must include the imports for corresponding declarations
// don't include extensions
// Basics
import { ServerComponent } from './basics/server/server.component';
import { ServersComponent } from './basics/servers/servers.component';
import { CockpitComponent } from './section5/cockpit/cockpit.component';
import { ServerElementComponent } from './section5/server-element/server-element.component';
import { GameControlComponent } from './asgn4/game-control/game-control.component';
import { OddComponent } from './asgn4/odd/odd.component';
import { EvenComponent } from './asgn4/even/even.component'

@NgModule({
  /* Since Angular does NOT parse through files looking for classes,
  we have to tell it what classes to include in a given module,
  which is done through declarations.
  Angular still doesn't know where to find these components so we must
  import them (noted above). */
  declarations: [
    AppComponent,
    // Asgn 3
    LoggerComponent,
    // Asgn 2
    UserComponent,
    // Asgn 1
    WarningAlertComponent,
    SuccessAlertComponent,
    // Basics
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  // which components should we be aware of at the beginning (index.html)
  bootstrap: [AppComponent]
})
export class AppModule {}
