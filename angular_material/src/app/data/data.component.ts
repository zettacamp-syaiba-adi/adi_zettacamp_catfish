import { Component, Input, Output , EventEmitter} from '@angular/core';
import { DataService } from '../data.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  // providers: [LoggingService]
})
export class DataComponent {
  @Input()
  data!: { name: string; status: string; };
  @Input()
  id!: number;

  constructor(private loggingService: LoggingService, 
              private dataService: DataService){}

  onSetTo(status: string) {
    this.dataService.updateData(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.dataService.statusUpdated.emit(status);
  }
}
