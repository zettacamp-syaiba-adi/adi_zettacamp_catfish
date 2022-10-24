import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class DataService{
    datas = [
        {
          name: 'Syaiba Adi Pramudita',
          status: 'Hadir'
        },
        
      ];
    
      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService:LoggingService){}

    addData(name: string, status: string){
        this.datas.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }
    updateData(id: number, status: string){
        this.datas[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}