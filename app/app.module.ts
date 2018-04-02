import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import{ EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavbarComponent } from './nav/navbar.component'
import { EventService } from './events/event.services'
import { ToastrService } from './common/toastr.service'

import { EventsAppComponent } from "./events-app.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavbarComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService]

})
export class AppModule {

}