import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent, ISession } from '../shared/index'

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
    a {cursor: pointer}
  `]
})
export class EventDetailsComponent {
  filterBy: string = 'all'
  event:IEvent
  addMode: Boolean
  sortBy: string = 'name'
  
  constructor(private eventService:EventService, private route:ActivatedRoute) {

  }
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession () {
    this.addMode = true
  }

  cancelSession() {
    this.addMode = false
  }

  saveNewSession(session: ISession ) {
    const nextId = Math.max.apply(null, this.event.sessions.map( session => session.id))

    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false

  }

}