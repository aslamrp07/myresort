import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ResortService } from '../service/resort.service';

@Component({
  selector: 'app-resort-add',
  templateUrl: './resort-add.component.html',
  styleUrls: ['./resort-add.component.scss'],
})
export class ResortAddComponent implements OnInit {
  formId = 'addRessort';
  form: FormGroup;
  addResortSub: Subscription;

  constructor(private fb: FormBuilder, private resortService: ResortService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      resortName: ['', Validators.required],
      address: ['', Validators.required],
      cellNo: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      isWifiExist: [false, Validators.required],
      isBreakfastExist: [false, Validators.required],
      isParkingExist: [false, Validators.required],
      isOutdoorPoolExist: [false, Validators.required],
      isLaundryExist: [false, Validators.required],
      isBBQExist: [false, Validators.required],
    });
  }

  get resortName() {
    return this.form.get('resortName');
  }
  get address() {
    return this.form.get('address');
  }
  get cellNo() {
    return this.form.get('cellNo');
  }
  get email() {
    return this.form.get('email');
  }
  get isWifiExist() {
    return this.form.get('isWifiExist');
  }
  get isBreakfastExist() {
    return this.form.get('isBreakfastExist');
  }
  get isParkingExist() {
    return this.form.get('isParkingExist');
  }
  get isOutdoorPoolExist() {
    return this.form.get('isOutdoorPoolExist');
  }
  get isLaundryExist() {
    return this.form.get('isLaundryExist');
  }
  get isBBQExist() {
    return this.form.get('isBBQExist');
  }

  onAddResort() {
    if (this.form.valid) {
      console.log(this.form.value, `form-values`);

      this.addResortSub = this.resortService.resortAdd(this.form.value).subscribe(
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
