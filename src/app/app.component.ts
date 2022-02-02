import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	listTransference: any[] = [];

	onTransferHandler(event: any) {
		console.log(event);
		const transference = {... event, data: new Date()}
		this.listTransference.push(transference);
	}

}
