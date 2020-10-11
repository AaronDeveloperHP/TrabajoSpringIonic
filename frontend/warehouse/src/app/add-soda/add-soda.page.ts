import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SodaService } from '../services/soda.service';

@Component({
  selector: 'app-add-soda',
  templateUrl: './add-soda.page.html',
  styleUrls: ['./add-soda.page.scss'],
})
export class AddSodaPage implements OnInit {

  sodaForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private sodaService: SodaService,
    private router: Router) {
    this.sodaForm = this.fb.group({
      productName: [''],
      productQuantity: [''],
      productFormat:[''],
      productPack:['']
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.sodaForm.valid) {
      console.log("COSA");
      return false;
    } else {
      let soda = {
        productNumber: null,
        productName: this.sodaForm.value.productName,
        productFormat:this.sodaForm.value.productFormat,
        productPack:this.sodaForm.value.productPack,
        productQuantity: this.sodaForm.value.productQuantity
      }
      this.sodaService.addSoda(soda)
        .subscribe((res) => {
          console.log("por aquí pasó")
          this.router.navigateByUrl("/soda-list");
          
        });
    }
  }

}
