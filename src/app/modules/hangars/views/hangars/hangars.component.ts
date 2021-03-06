import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { Hangar } from 'src/app/core/interfaces/hangar';

@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.css']
})
export class HangarsComponent implements OnInit {

  // Pagination
  pageSize = 5;
  p = 1;
  total: number;


  hangar: Hangar;

  hangars: Hangar[] = new Array<Hangar>();

  isHangarSelected: boolean;
  hangarSelected: Hangar;

  constructor( private router: Router,
               private hangarApiService: HangarApiService,
               private componentComService: ComponentComService) { }

  ngOnInit() {

    this.isHangarSelected = false;

    this.hangarApiService.getHangarPage(this.p - 1, this.pageSize).subscribe(
      response => {
        this.total = response.totalElements;
        this.hangars = response.content;
        console.log(this.hangars);
      }
    );

    /*

    this.hangarApiService.getAllHangars().subscribe(
      data => {
        this.hangars = data.map( item => this.hangarApiService.mapToHangar(item));
        console.log(this.hangars);
      }
    );

    */
    /*

    this.apiService.getHangarById().subscribe(
      data => {
        if (data === undefined ) {
          alert('No se ha encontrado el hangar'); // ¿nunca entra aquí?
        } else {
          this.hangar = this.apiService.mapResult(data);
        }
      });
      */
  }

  /***
   * Navigate to hangar form:
   *  _Shows hangar info (edit=false) if hangar has been previously selected.
   *  _Else shows empty form to submit new hangar.
   */
  public hangarForm( hangar: Hangar ) {
    this.componentComService.collectData(hangar);
    this.router.navigate(['/hangars/details', hangar.id]);
  }

  public hangarEdit( hangar: Hangar ) {
    this.componentComService.collectData(hangar);
    this.router.navigate(['hangar/edit', hangar.id]);
  }



  public addNewHangar() {
    console.log('Navigating to new hangar form');
    this.router.navigate(['hangars/add']);
  }

  public setHangarSelected( hangar: Hangar) {
    console.log('Hangar clicado: ' + hangar.name);
    this.componentComService.collectData(hangar);
    this.isHangarSelected = true;
    this.hangarSelected = hangar;
  }

  public selectButtonAction() {
    if (this.isHangarSelected) {

    } else {
      this.addNewHangar();
    }
  }

  pageChanged(page) {
    this.p = page;

    this.hangarApiService.getHangarPage(page - 1, this.pageSize).subscribe(
      response => {
        this.total = response.totalElements;
        this.hangars = response.content;
        console.log(this.hangars);
      }
    );
  }


}
