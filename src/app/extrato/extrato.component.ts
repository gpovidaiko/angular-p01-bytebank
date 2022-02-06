import { Component, OnInit } from '@angular/core';
import { Transference } from '../models/transference.model';
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
		this.transferenceService.all()
			.subscribe({
				next: (listTransference: Transference[]) => this.listTransference = listTransference
			});
	}

}
