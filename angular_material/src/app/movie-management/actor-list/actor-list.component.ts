import { Component, OnInit } from '@angular/core';
import { ActorManagementService } from '../actor-management.service';
import { Actors } from '../model/actors.model';
import { MovieManagementService } from '../movie-management.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  
  selectedActor: Actors | null = null;

  constructor(
    private actorService: ActorManagementService
  ) { }

  ngOnInit(): void {
    this.actorService.selectedActor$.subscribe((actor) =>
      this.selectedActor = actor);
  }
}
