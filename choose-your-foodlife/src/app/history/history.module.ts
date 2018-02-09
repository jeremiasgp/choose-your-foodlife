import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { HistoryComponent } from './history.component';
import { HistoryStepComponent } from './history-step/history-step.component';
import { StatsComponent } from './stats/stats.component';
import { HistoryService } from './history.service'; 
import { ModalContentComponent } from './modal-content.component';

@NgModule({
    declarations: [
        HistoryComponent,
        HistoryStepComponent,
        StatsComponent,
        ModalContentComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [ HistoryService ],
    entryComponents: [
        ModalContentComponent
    ],
    exports: [
        HistoryComponent,
        HistoryStepComponent,
        StatsComponent,        
    ],
})
export class HistoryModule {}