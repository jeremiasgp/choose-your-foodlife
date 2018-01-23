import { Component, OnInit } from '@angular/core';
import { IHistoryModel } from './history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  actualStep = {
    text: 'Debes abastecerte para alimentarte durante el mes vegetariano. Hoy hay un descuento del 40% en el supermercado local, querés aprovecharlo?',
  };
  constructor() { }

  ngOnInit() {
  }

}
