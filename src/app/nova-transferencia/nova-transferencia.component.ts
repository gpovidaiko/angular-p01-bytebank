import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenceService } from './../services/transference.service';

@Component({
	selector: 'app-nova-transferencia',
	templateUrl: './nova-transferencia.component.html',
	styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

	valor: number;
	destino: number;

	constructor(private transferenceService: TransferenceService, private router: Router) { }

	ngOnInit(): void {
	}

	transfer() {
		console.log('Transfer requested');
		let transference = {
			valor: this.valor,
			destino: this.destino
		};
		this.transferenceService.add(transference)
			.subscribe({
				next: _ => this.router.navigateByUrl('extrato'),
				error: error => console.error(error)
			});
	}

}
