import { Component, OnInit } from '@angular/core';
import { Resort } from '../model/resort.model';
import { ResortService } from '../service/resort.service';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.scss']
})
export class ResortListComponent implements OnInit {

 resortListArr: any[];

//  resortList: Resort = {
//    resortName: '',
//    address: '',
//    cellNo: '',
//    email: '',
//    isWifiExist: false,
//    isParkingExist: false,
//    isOutdoorPoolExist: false,
//    isLaundryExist: false,
//    isBBQExist: false
//  };


  constructor(private resortService: ResortService) { }

  ngOnInit(): void {
    this.getTutorialList();
  }


  getTutorialList() {
    this.resortService.resortList().subscribe((data) => {
      if (data) {
        this.resortListArr = data;
      }
    });
  }



}
