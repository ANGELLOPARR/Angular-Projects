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
