import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Price } from 'src/app/core/models/price.model';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css']
})
export class ProductDetailedViewComponent implements OnInit {

  product: Product;

  id: number;

  priceHistory: Array<Price>;

  isDataReady = false;

  constructor( private productApiService: ProductApiService,
               private componentComService: ComponentComService,
               private route: ActivatedRoute ) {
   }

  ngOnInit() {

    this.route.params.subscribe( (params) => this.id = params.productid );

    this.productApiService.getProductById(+this.id).subscribe(
      (response: any) => {
        this.product = this.productApiService.mapToProduct(response);
        console.log(this.product);
        this.isDataReady = true;
      });

    if (this.isDataReady) {
      this.productApiService.getPriceDataByProduct(this.product.id).subscribe(
      data => {
        this.priceHistory = data.map( (entry: Price) => this.productApiService.mapToPrice(entry) );
        console.log(this.priceHistory);
      }
    );
    }


  }


}
