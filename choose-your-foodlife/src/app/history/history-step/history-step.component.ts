import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history-step',
  templateUrl: './history-step.component.html',
  styleUrls: ['./history-step.component.css']
})
export class HistoryStepComponent implements OnInit {
  @Input() stepInfo: any;
  @Output() stepChoose: any = new EventEmitter<any>();

  constructor(private service: HistoryService) { }

  ngOnInit() {
  }

  iChoose(opt: any) {
    if ( opt.money !== undefined && opt.money !== 0 ) {
      this.service.money = opt.money;
      delete opt.money;
    }
    if ( opt.health !== undefined && opt.health !== 0 ) {
      this.service.health = opt.health;
      delete opt.health;
    }
    if ( opt.social !== undefined && opt.social !== 0 ) {
      this.service.social = opt.social;
      delete opt.social;
    }

    this.stepChoose.emit(opt);
  }

}
