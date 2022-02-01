import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	transference: any = { };

	onTransferHandler(event: any) {
		console.log(event);
		this.transference = event;
	}

}
