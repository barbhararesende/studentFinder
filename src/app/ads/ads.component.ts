import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  formAds = new FormGroup({
    nome: new FormControl('',{}),
    tipo: new FormControl('',{}),
    genero: new FormControl('',{}),
    dataNascimento: new FormControl('',{}),
    observacao: new FormControl('',{}),
    inativo: new FormControl('',{})
  })

  constructor() { }

  ngOnInit(): void {
  }

  create(): void{

  }

}
