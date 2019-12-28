import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
Workflow is we have main.ts that is run.
An AppModule is "bootstrapped" (started). We can see it below.
It is also imported from the ./app/app.module folder.
In the app.module.ts, the "bootstrap" array tells Angular about what it needs.
AppModule is a class in app.module.ts that has been exported (made visible to all)
and that has a decorator @NgModule which defines the bootstrap array that
points Angular to the app.component which has app-root selector.
*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
