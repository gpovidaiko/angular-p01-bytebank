import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transference } from './../models/transference.model';

@Injectable({
	providedIn: 'root'
})
export class TransferenceService {

	private readonly URL = "http://localhost:3000/transferences";

	private _listTransference: any[];

	constructor(private httpClient: HttpClient) {
		this._listTransference = [];
	}

	get listTransference() {
		return this._listTransference;
	}

	all() {
		return this.httpClient.get<Transference[]>(this.URL);
	}

	add(transference: any) {
		this.setData(transference);
		return this.httpClient.post<Transference>(this.URL, transference);
	}

	private setData(transference: any) {
		transference.data = new Date();
	}
}
