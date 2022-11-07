import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formFaculdade = new FormGroup({
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

}
