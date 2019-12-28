import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { WarningAlertComponent } from './warningAlert/app.warningAlert';
import { SuccessAlertComponent } from './asgn1-success-alert/success-alert.component';

// we must include the imports for corresponding declarations
// don't include extensions
//import { BasicsServerComponent } from './basics-server/server.component';
//import { BasicsServersComponent } from './basics-servers/servers.component'

@NgModule({
  /* Since Angular does NOT parse through files looking for classes,
  we have to tell it what classes to include in a given module,
  which is done through declarations.
  Angular still doesn't know where to find these components so we must
  import them (noted above). */
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    //BasicsServerComponent,
    //BasicsServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  // which components should we be aware of at the beginning (index.html)
  bootstrap: [AppComponent]
})
export class AppModule { }
