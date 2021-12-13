import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { RoomService } from '../service/room.service';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  [x: string]: any;

  roomlist: any[];
  totalRecords = 0;
  roomId: string;
  myControl = new FormControl();
  resortViewSub: Subscription;
  message = '';
  router: any;
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

    //this.roomtId = this.route.snapshot.params.roomid;
    this.getroomList();

  }


  getroomList() {
    this.resortViewSub = this.roomService.roomList().subscribe((data) => {
      if (data && data.data.length) {
        this.roomlist = data.data;
        // console.log(data);
        // this.resortListArr = Array.of(this.resortListArr);
        this.totalRecords = this.roomlist.length;
        console.log(this.roomlist);
      }
    });
  }
}
function id(id: any) {
  throw new Error('Function not implemented.');
}

