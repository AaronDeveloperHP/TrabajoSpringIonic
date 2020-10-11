import { SodaService } from './../services/soda.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-soda',
  templateUrl: './update-soda.page.html',
  styleUrls: ['./update-soda.page.scss'],
})
export class UpdateSodaPage implements OnInit {

  sodaForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private sodaService: SodaService,
    private router: Router) {
    this.sodaForm = this.fb.group({
      productName: [''],
      productFormat:[''],
      productPack:[''],
      productQuantity: ['']
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.sodaForm.valid) {
      return false;
    } else {
      let soda = {
        productNumber: null,
        productName: this.sodaForm.value.productName,
        productFormat:this.sodaForm.value.productFormat,
        productPack:this.sodaForm.value.productPack,
        productQuantity: this.sodaForm.value.productQuantity,
      }
      this.sodaService.updateSoda(this.sodaService.getCurrentSodaId(),soda)
        .subscribe((res) => {
          console.log("por aquí pasó")
          this.router.navigateByUrl("/soda-list");
          
        });
    }
  }

}
