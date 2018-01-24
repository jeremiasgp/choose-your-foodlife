import { Observable } from "rxjs/Observable";
import { IHistoryModel } from "./history.model";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";

@Injectable()
export class HistoryService {
    history: IHistoryModel[];
    private _money: number = 0;
    days = 30;
    private _day: number = 0;
    private _social: number = 0;
    private _health:number = 0;

    @Output() actualMoney = new EventEmitter<number>();
    @Output() actualDay = new EventEmitter<number>();
    @Output() actualHealth = new EventEmitter<number>();
    @Output() actualSocial = new EventEmitter<number>();

    constructor(private http: HttpClient) {}

    getHistory(): Observable<IHistoryModel[]> {
        return this.http.get<IHistoryModel[]>(`assets/histories/new-diet.json`)
        .map((h) => { this.history = h; return h; });
    }

    set money(m: number){
        console.log(this._money);
        console.log('antes');
        this._money = this._money + m;
        console.log(m);
        console.log(this._money);
        this.actualMoney.emit(this._money);
    }
    set social(s: number){
        this._social = this._social + s;
        this.actualSocial.emit(this._social);
    }
    set day(d: number){
        this._day = this._day + d;
        this.actualDay.emit(this._day);
    }
    set health(h: number){
        this._health = this._health + h;
        this.actualHealth.emit(this._health);
    }
}