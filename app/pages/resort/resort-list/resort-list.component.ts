import { Component, OnInit } from '@angular/core';
import { Resort } from '../model/resort.model';
import { ResortService } from '../service/resort.service';
import { Subscriber, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.scss']
})
export class ResortListComponent implements OnInit {

  resortlist: any[];
  totalRecords = 0;
  resortId: string;
  myControl = new FormControl();
  resortViewSub: Subscription;
  message = '';
  router: any;

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
    this.resortViewSub = this.resortService.resortList().subscribe((data) => {
      if (data && data.data.length) {
        this.resortlist = data.data;
        // console.log(data);
        // this.resortListArr = Array.of(this.resortListArr);
        this.totalRecords = this.resortlist.length;
        console.log(this.resortlist);
      }
    });
  }

  Search(e: string) { }

  deleteResort(id:string) {
    this.resortService.deleteResortId(id).subscribe(
     (response) => {
       console.log(response);
       this.router.navigate(['/resort']);
     },
     (error) => {

     console.log(error );
     }
   );
 }

  ngOnDestroy() {
    if (this.resortViewSub) {
      this.resortViewSub.unsubscribe();
    }
  }





}
export class ProgressBarIndeterminateExample { }

export class ProgressSpinnerOverviewExample { }

