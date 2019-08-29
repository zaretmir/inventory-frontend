import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { ProductExcerpt } from 'src/app/core/models/product-excerpt.model';
import { map, filter, switchMap, first } from 'rxjs/operators';

@Component({
  selector: 'app-hangar-detailed-view',
  templateUrl: './hangar-detailed-view.component.html',
  styleUrls: ['./hangar-detailed-view.component.css']
})
export class HangarDetailedViewComponent implements OnInit {

  id: number;

  public hangar: Hangar = new Hangar();
  products: ProductExcerpt[] = new Array<ProductExcerpt>();

  isDataReady = false;
  loadProducts = false;

  constructor(private route: ActivatedRoute,
              private componentComService: ComponentComService,
              private productHangarApiService: ProductHangarApiService,
              private hangarApiService: HangarApiService) {
  }

  ngOnInit() {

    this.route.params.pipe(first()).subscribe(
      params => {
        console.log(params);
        this.id = params.hangarid; },
      err => { console.log(err); },
      () => {
        this.getHangar(this.id); } // on complete
    );

    // this.getHangar(this.id);

    // this.hangar = this.componentComService.retrieveData();
  }

  getHangar(id: number) {
    console.log('gethangar');

    this.hangarApiService.getHangarById(id).subscribe(
      data => { this.hangar = this.hangarApiService.mapToHangar(data); },
      err => { console.log(err); },
      () => {
        this.isDataReady = true; }
    );
  }

  onLoadProducts() {
    console.log('load products');
    this.loadProducts = true;
  }




}
