import { Component, Input, OnInit } from '@angular/core';
import { TransferenceService } from '../services/transference.service';

@Component({
	selector: 'app-extrato',
	templateUrl: './extrato.component.html',
	styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

	listTransference: any[];

	constructor(private transferenceService: TransferenceService) { }

	ngOnInit(): void {
		this.listTransference = this.transferenceService.listTransference;
	}

}
