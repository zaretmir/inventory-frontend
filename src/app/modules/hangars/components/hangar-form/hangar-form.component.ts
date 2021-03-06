import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { TranslateService } from '@ngx-translate/core';
import { Hangar } from 'src/app/core/interfaces/hangar';

@Component({
  selector: 'app-hangar-form',
  templateUrl: './hangar-form.component.html',
  styleUrls: ['./hangar-form.component.css']
})
export class HangarFormComponent implements OnInit {
/*

  // Nested
  hangarForm =  new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]),
    address: new FormControl(
      '',
      Validators.required),
    ownerInfo: new FormGroup({
      owner: new FormControl(
        '',
        [Validators.required]),
      email: new FormControl(
        '',
        [Validators.email]),
      phone: new FormControl(
        '',
        [Validators.required]
      )
      })

  });

  // Nested
  // Getters for cleaner access in template. Allows using hangarName instead of hangarForm.get('hangarName')
  get name() {
    return this.hangarForm.get('name');
  }

  get address() {
    return this.hangarForm.get('address');
  }

  get owner() {
    return this.hangarForm.get('ownerInfo.owner');
  }

  get email() {
    return this.hangarForm.get('ownerInfo.email');
  }

  get phone() {
    return this.hangarForm.get('ownerInfo.phone');
  }*/



  hangarForm =  new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]),
    address: new FormControl(
      '',
      Validators.required),
    owner: new FormControl(
        '',
      [Validators.required]),
    ownerEmail: new FormControl(
      '',
      [Validators.email]),
    phoneNumber: new FormControl(
      '',
      [Validators.required]
    )
  });

  // Getters for cleaner access in template. Allows using hangarName instead of hangarForm.get('hangarName')
  get name() {
    return this.hangarForm.get('name');
  }

  get address() {
    return this.hangarForm.get('address');
  }

  get owner() {
    return this.hangarForm.get('owner');
  }

  get ownerEmail() {
    return this.hangarForm.get('ownerEmail');
  }

  get phoneNumber() {
    return this.hangarForm.get('phoneNumber');
  }

  @Input() isEditExistent?: boolean;
  @Input() isReadOnly?: boolean;
  @Input() hangarPopulate: Hangar; // Hangar to populate value fields with

  @Output() outputToParent = new EventEmitter<Hangar>();

  hangar: Hangar;

  constructor( private hangarApiService: HangarApiService ) { }

  ngOnInit() {
    if (this.isReadOnly || this.isEditExistent) {
      this.name.setValue(this.hangarPopulate.name);
      this.address.setValue(this.hangarPopulate.address);
      this.owner.setValue(this.hangarPopulate.owner);
      this.ownerEmail.setValue(this.hangarPopulate.ownerEmail);
      this.phoneNumber.setValue(this.hangarPopulate.phoneNumber);
    }
  }

  onSubmit() {
    console.log(this.hangarForm.value);
    this.outputToParent.emit( this.hangarForm.value );

  }
  /*

  onSubmit(event) {
    console.log('OnSubmit');
    this.hangar.name = 'H_Test';
    this.hangar.address = 'A_test';
    this.newHangarData.emit( this.hangar );
  }
  */

  /*
  onSubmit() {
    if (!this.isReadOnly) {
    }
    const formData: FormData = new FormData();
    formData.append('name', this.hangar.name);
    formData.
    console.log( 'Submit clicked' );
    console.log( 'Hangar:' + this.hangar.name.toString());
    this.newHangar.emit( this.hangar );
  }
  */

}
