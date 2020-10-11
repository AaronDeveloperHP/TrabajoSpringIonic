import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soda } from '../models/soda';
import { SodaService } from '../services/soda.service';

@Component({
  selector: 'app-soda-list',
  templateUrl: './soda-list.page.html',
  styleUrls: ['./soda-list.page.scss'],
})
export class SodaListPage implements OnInit {

  sodas: Soda[];
  constructor(private sodaService: SodaService, private router:Router) { }


  ngOnInit() {
  this.getAllSodas();
  }

  ionViewWillEnter(){
    this.getAllSodas();
  }

  getAllSodas(){
    this.sodaService.getSodas().subscribe(sodas=>{
      this.sodas=sodas;
    });
}
deleteSoda(id: number){
  this.sodaService.deleteSoda(id).subscribe( () => {
    this.getAllSodas();
  })
}

insertSoda(){
  this.router.navigateByUrl("/add-soda");
}
updateSoda(id:number){ 
  this.sodaService.setCurrentSodaId(id); 
this.router.navigateByUrl("/update-soda");
}
}