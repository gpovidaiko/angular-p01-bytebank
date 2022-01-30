import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nova-transferencia',
	templateUrl: './nova-transferencia.component.html',
	styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

	valor: number;
	destino: number;

	constructor() { }

	ngOnInit(): void {
	}

	transfer() {
		console.log('Transfer requested');
		console.log(`valor: ${this.valor}`);
		console.log(`destino: ${this.destino}`);
	}
}
