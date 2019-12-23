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
    selector: 'app-server',
    templateUrl: './server.component.html'

})
export class ServerComponent {

}