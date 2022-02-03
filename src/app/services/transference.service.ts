import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TransferenceService {

	private _listTransference: any[];

	constructor() {
		this._listTransference = [];
	}

	get listTransference() {
		return this._listTransference;
	}

	add(trasnference: any) {
		this.setData(trasnference);
		this._listTransference.push(trasnference);
	}

	private setData(transference: any) {
		transference.data = new Date();
	}
}
