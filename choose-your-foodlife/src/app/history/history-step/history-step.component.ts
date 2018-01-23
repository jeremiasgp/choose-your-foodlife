import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history-step',
  templateUrl: './history-step.component.html',
  styleUrls: ['./history-step.component.css']
})
export class HistoryStepComponent implements OnInit {
  @Input() stepInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
