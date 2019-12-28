# Quick Notes

### Creating a component

1. Create a sub-folder within src/app/ (name it the component general name)
2. Create a `name.component.ts` file and a `name.component.html` file.
3. Use the following boilerplate in `name.component.ts`:
```
/*
A component is a TypeScript class that Angular can instantiate.
Decorators allows us to enhance our classes.
*/
import { Component } from '@angular/core';

// we need to pass in a Javascript object to the decorator
// so that we can get some metadata in for it.
@Component({
    // MUST be a unique selector, DO NOT overwrite an HTML tag.
    // This is how we use this component in other HTML files
    selector: 'app-name',
    templateUrl: './name.component.html'

})
export class NameComponent {

}
```
4. Navigate to `app.module.ts` and import the following:
```
import { NameComponent } from `./name/name.component`;
```
5. Finally, in the `@NgModule` within app.module.ts, within the `declarations` array, we need to add the name of our component to the array. Should look like this:
```
@NgModule({
  /* Since Angular does NOT parse through files looking for classes,
  we have to tell it what classes to include in a given module,
  which is done through declarations.
  Angular still doesn't know where to find these components so we must
  import them (noted above). */
  declarations: [
    AppComponent,
    NameComponent
  ],
  ...
```

ALTERNATIVELY, use `ng generate component name` OR `ng g c name` which does the same thing:
```
angelloparr@Angellos-MacBook-Pro my-first-app % ng g c servers
CREATE src/app/servers/servers.component.css (0 bytes)
CREATE src/app/servers/servers.component.html (22 bytes)
CREATE src/app/servers/servers.component.spec.ts (635 bytes)
CREATE src/app/servers/servers.component.ts (273 bytes)
UPDATE src/app/app.module.ts (920 bytes)
```

For HTML templates, for `templateURL`, which is needed in any angular component absolutely, we can make the string instead of pointing to an external file to point to some inline HTML code.

ex.
```
templateURL:
`
<app-servers></app-servers>
<app-servers></app-servers>
<app-servers></app-servers>
`
```

We can do the same with CSS, except with CSS, we change the `stylesURL` array to `styles` only. It is still an array, BUT now each item in the array is a different CSS style we're changing.

ex.
```
styles: [`
    h3 {
        color: dodgerblue;
    }
`]
```

We can change the selector for a component to not only be a tag, but also an **attribute** or even a **class**.

Default: `selector: 'app-server'`

Corresponding HTML: `<app-server></app-server>`

Attribute example: `selector: '[app-server]'`

Corresponding HTML: `<div app-server></div>`

Class example: `selector: '.app-server'`

Corresponding HTML: `<div class="app-server"></div>`

### Property binding

We can dynamically bind properties in HTML tags to certain values. In normal HTML, the property is just set already but with Angular we can change it within each specific tag. (versus messing with the DOM?).

We do this by using brackets around a property in HTML.

```
<button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>
```

**Property binding changes the DOM dynamically during runtime.**

### Event binding

Event binding uses `()` while property binding uses `[]`

We use them the same way, though whatever is event-binded typically calls some sort of function.

**Important:** We can use event binding on any events that an HTML element has. To see a list of events, visit MDN's lists with a google search on whatever element you're using. Just remove the "on" from the first part of the event attribute. `onclick` --> `click`

ex.

```
<button class="btn btn-primary" 
[disabled]="!allowNewServers" 
(click)="onCreateServer()">
    Add Server</button>
```

### Directives

Components are directives. Let's get started with that. Directives are instructions in the DOM. ex: `<p appTurnGreen>Receives green background</p>`

Directives follow the following syntax:

```
@Directive({
  selector: '[appTurnGreen]'
})
export class TurnGreenDirective {

}
```

### ngIf

ngIf is a **structural directive** It is in Angular by default and actually changes the DOM's HTML dynamically depending on if the ngIf evaluates to true or not. No hiding or anything, actually inserts or removes HTML. We use the `*` before the ngIf because it is *structural*

ex.

```
<p *ngIf="serverCreated">Server has been created. 
    Name of server is {{ serverName }}</p>
```

We can also use else statements. Example below.

```
<p *ngIf="serverCreated; else noServer">Server was created. Name of server is: {{ serverName }}</p>
<ng-template #noServer>
    <p>No servers have been created.</p>
</ng-template>
```

### ngStyle

ngStyle is an **attribute directive**