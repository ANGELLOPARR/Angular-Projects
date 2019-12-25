import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// we must include the imports for corresponding declarations
// don't include extensions
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'

@NgModule({
  /* Since Angular does NOT parse through files looking for classes,
  we have to tell it what classes to include in a given module,
  which is done through declarations.
  Angular still doesn't know where to find these components so we must
  import them (noted above). */
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  // which components should we be aware of at the beginning (index.html)
  bootstrap: [AppComponent]
})
export class AppModule { }
