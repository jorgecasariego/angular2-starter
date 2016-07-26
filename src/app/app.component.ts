import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: require('./app.component.html'),
	styles: [require('./app.component.css')]
})

// Para que funcione los pasos son:
// 1. npm install
// 2. npm run build

export class AppComponent{}