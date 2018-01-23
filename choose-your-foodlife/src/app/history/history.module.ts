import { NgModule } from "@angular/core";

import { HistoryComponent } from './history.component';
import { HistoryStepComponent } from './history-step/history-step.component';
import { StatsComponent } from './stats/stats.component';
import { HistoryService } from './history.service'; 


@NgModule({
    declarations: [
        HistoryComponent,
        HistoryStepComponent,
        StatsComponent,
    ],
    providers: [ HistoryService ],
    exports: [
        HistoryComponent,
        HistoryStepComponent,
        StatsComponent,
    ],
})
export class HistoryModule {}