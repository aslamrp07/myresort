import { NgModule } from '@angular/core';
import { RoomService } from './service/room.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

export const routes = [
  { path: '', component: RoomListComponent, pathMatch: 'full' },
  { path: 'add', component: RoomAddComponent, pathMatch: 'full' },
  { path: 'details/:robotName', component: RoomDetailsComponent },
];

@NgModule({
  declarations: [
    RoomAddComponent,
    RoomListComponent,
    RoomDetailsComponent
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
  providers: [RoomService],
})
export class RoomModule {}
