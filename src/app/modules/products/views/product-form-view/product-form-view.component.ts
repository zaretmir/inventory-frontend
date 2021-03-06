import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-product-form-view',
  templateUrl: './product-form-view.component.html',
  styleUrls: ['./product-form-view.component.css']
})
export class ProductFormViewComponent implements OnInit {

  constructor( private productApiService: ProductApiService ) { }

  ngOnInit() {
  }
/*
  postData( product: Product ) {
    this.productApiService.postProduct(product)
    .subscribe(
      response => {
        console.log(response);
      },
      (error: Response) => {
        alert('An unexpected error ocurred');
      }
    );
  }
  */

}
