import { Component, OnInit } from '@angular/core';
import { IHistoryModel } from './history.model';
import { HistoryService } from './history.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalContentComponent } from './modal-content.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  actualStep: IHistoryModel;
  bsModalRef: BsModalRef;
  step = 0;
  money = 0;

  constructor(private service: HistoryService, private modalService: BsModalService) { }

  ngOnInit() {
    this.service.getHistory().subscribe(
      () => {
        this.actualStep = this.service.history[this.step];
        this.service.money = 2000;
        this.service.health = 100;
        this.service.day = 1;
        this.service.social = 100;
        this.service.actualMoney.subscribe( m => this.money = m );
      }
    );
  }

  openModalWithComponent(content: string) {
    const initialState = {
      contenido: content,
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  goStep(opt: any) {
    if(opt.sentence !== undefined){
      this.openModalWithComponent(opt.sentence);
    }
    if(this.step + 1 < this.service.history.length){
      this.step++;
      this.actualStep = this.service.history[this.step];
    }else{
      alert("FIN");
    }
  }

}
