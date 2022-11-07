import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  courses: any;

  formFaculdade = new FormGroup({
    nome: new FormControl('',{}),
    email: new FormControl('',{}),
    senha: new FormControl('',{}),
    address: new FormControl('',{}),
    courses: new FormControl({
      name:['',{} ],
      area:['',{} ],
    })
  })


  constructor() { }

  ngOnInit(): void {
  }

  register(): void{
    
  }

}
