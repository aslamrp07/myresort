import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { startWith } from 'rxjs/internal/operators/startWith';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { ResortService } from '../../resort/service/resort.service';
import { AsyncService } from 'src/app/shared/services/async.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { RoomService } from '../service/room.service';

RoomService
@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss']
})
export class RoomAddComponent implements OnInit {
  formId = 'roomsAddForm';
  form: FormGroup;
  roomArr: any = [];
  addResortSub: Subscription;
  filteredResort: Observable<any[]>;
  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private asyncService: AsyncService,
    private resortService:ResortService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      resortId: ['', Validators.required],
      resortName: ['', Validators.required],
      roomName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      isVatIncluded: [false, Validators.required],
    });
    this.commonService.setUiInfo({
      formId: this.formId,
      goBackPath: '/room',
      title: 'Room Add',

    });

    this.filteredResort = this.resortName.valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      switchMap((value: string) => {
        if (value !== '') {
          this.asyncService.start();
          return this.resortService.getResortAutoComplete(value);
        } else {
          return of(null);
        }
      })
    );

    this.filteredResort.subscribe((data: any) => {
      this.asyncService.finish();
    });
  }

  get resortId() {
    return this.form.get('resortId');
  }

  get resortName() {
    return this.form.get('resortName');
  }

  get roomName() {
    return this.form.get('roomName');
  }

  get inex() {
    return this.form.get('index');
  }
  get description() {
    return this.form.get('description');
  }

  get price() {
    return this.form.get('price');
  }

  get isVatIncluded() {
    return this.form.get('isVatIncluded');
  }

  onSelectResort(value: any) {
    this.resortId.patchValue(value._id);
    this.resortName.patchValue(value.resortName);

    console.log(this.form.value);
  }

  onAddRooms = () => {};

  addroom() {
    if (!this.form.valid) {
      this.commonService.showErrorMsg(`ALL Fields Required`);
      return;
    }

    this.roomArr.push({
      resortId: this.resortId.value, // or this.form.get('resortId').value
      resortName: this.resortName.value, // or this.form.get('resortId').value
      roomName: this.roomName.value,
      description: this.description.value,
      price: this.price.value,
      isVatIncluded: this.isVatIncluded.value,
    });

    // this.form.patchValue({
    //   roomName: '',
    //   description: '',
    //   price: '',
    //   isVatIncluded: false,
    // });
    //  OR
    this.roomName.patchValue('');
    this.description.patchValue('');
    this.price.patchValue('');
    this.isVatIncluded.patchValue(false);
  }

  deleteRoom(value: any, index: any) {
    this.roomArr = this.roomArr.filter(
      (cs: any) => cs.roomName !== value.roomName
    );
  }

  addRoom() {
    if (this.form.valid) {
      console.log(this.form.value, `form-values`);

      this.addResortSub = this.roomService.roomAdd(this.form.value).subscribe(
        (response) => {
          this.form.reset();
          console.log(response, `response`);

        },
        (err) => {
          console.log(err, `errrrrrrr`);
        }
      );
    } else {
      alert(`ALL FIELD REQUIRED!!`);
    }
  }


 ngOnDestroy(): void {
  this.addResortSub.unsubscribe;
 }

  }


