import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  daysPercent: string;
  money: number;
  health: number;
  social: number;
  day: number;
  numbers: number[];

  constructor(private service: HistoryService) { }

  ngOnInit() {
    this.service.actualDay.subscribe( d => this.day = d );
    this.service.actualHealth.subscribe( h => this.health = h );
    this.service.actualMoney.subscribe( m => this.money = m );
    this.service.actualSocial.subscribe( s => this.social = s );
    this.numbers = [];
    for (let i = 1; i <= 30; i++) { this.numbers.push(i); }
  }

}
