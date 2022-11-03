import { Component, OnInit } from '@angular/core';
import { ActorManagementService } from '../../actor-management.service';
import { Actors } from '../../model/actors.model';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  actorList: Actors[] = [];
  selectedActor: Actors | null = null;

  constructor(private actorService: ActorManagementService) { }

  ngOnInit(): void {
    this.actorService.actors$.subscribe(actors => {
      this.actorList = actors;
    });
  }

  selectActor(actor: Actors){
    this.actorService.setSelectedActor(actor)
  }

}
