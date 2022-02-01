import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-nova-transferencia',
	templateUrl: './nova-transferencia.component.html',
	styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

	@Output() onTransfer = new EventEmitter<any>();

	valor: number;
	destino: number;

	constructor() { }

	ngOnInit(): void {
	}

	transfer() {
		console.log('Transfer requested');
		let transference = {
			valor: this.valor,
			destino: this.destino
		};
		this.onTransfer.emit(transference);
		this.clearFields();
	}

	clearFields() {
		this.valor = null;
		this.destino = null;
	}
}
