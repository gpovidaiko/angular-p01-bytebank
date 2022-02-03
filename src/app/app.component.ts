import { TransferenceService } from './services/transference.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private transferenceService: TransferenceService) { }

	onTransferHandler(event: any) {
		this.transferenceService.add(event);
	}

}
