import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resort } from '../model/resort.model';
import { ResortService } from '../service/resort.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-resort-details',
  templateUrl: './resort-details.component.html',
  styleUrls: ['./resort-details.component.scss']
})

export class ResortDetailsComponent implements OnInit {

  resort: Resort;
  resortId: string;
  resortInfo: Subscription;
  constructor( private resortService: ResortService,
    private route: ActivatedRoute, // import to get params value
    private router: Router) { }

  ngOnInit(): void {
    this.resortId = this.route.snapshot.params.resortid;
    this.getResortList();
  }


  getResortList() {
    this.resortInfo = this.resortService
      .getResortById(this.resortId)
      .subscribe((data) => {
        if (data) {
          this.resort = data.data;
          console.log(data.data);
        }
      });
  }



  ngOnDestroy(): void {
    if (this.resortInfo) {
      this.resortInfo.unsubscribe();
    }
  }


}
