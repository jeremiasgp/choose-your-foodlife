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

  constructor(private service: HistoryService) { }

  ngOnInit() {
    this.service.actualDay.subscribe( d => this.day = d );
    this.service.actualHealth.subscribe( h => this.health = h );
    this.service.actualMoney.subscribe( m => this.money = m );
    this.service.actualSocial.subscribe( s => this.social = s );
  }

}
