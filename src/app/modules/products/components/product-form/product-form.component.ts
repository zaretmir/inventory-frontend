import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() inputProduct: Product;
  @Input() isReadOnly: boolean;
  @Input() isEdit: boolean;

  @Output() clickedSubmit = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]),
    description: new FormControl(
      '',
      [Validators.required, Validators.maxLength(250)])
  });

  constructor() { }

  ngOnInit() {
    if (this.isReadOnly || this.isEdit) {
      this.name.setValue(this.inputProduct.name);
      this.description.setValue(this.inputProduct.description);
    }
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  public onSubmitClicked() {
    return this.clickedSubmit.emit( this.productForm.value );
  }

}