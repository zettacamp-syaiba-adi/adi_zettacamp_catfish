import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-newdata',
  templateUrl: './newdata.component.html',
  styleUrls: ['./newdata.component.css'],
  // providers: [LoggingService]
})
export class NewdataComponent {
  constructor(private loggingService: LoggingService,
              private dataService: DataService){
    this.dataService.statusUpdated.subscribe(
      (status:string) => alert('Status Kehadiran menjadi '+ status)
    )
  }

  onCreateAccount(dataName: string, dataStatus: string) {
    this.dataService.addData(dataName, dataStatus);
    this.loggingService.logStatusChange(dataStatus);
  }

}
