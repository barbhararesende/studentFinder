import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  editForm: FormGroup;
  
  apiURL : any;
  table: any;

  constructor(private formBuilder: FormBuilder, private http : HttpClient) { 
    this.apiURL = 'https://ancient-wave-65748.herokuapp.com';
    this.editForm = this.formBuilder.group({
      nome: ['',  []],
      email: ['', []],
      senha: ['', []],
      address: ['', []],
      courses: this.formBuilder.array([])
    })
  }
  
  ngOnInit(): void {
    
    this.http.get(`${ this.apiURL }/university`)
            .subscribe(
              resultado => {
                console.log(resultado)
              },
              erro => {
                if(erro.status == 404) {
                  console.log('Produto não localizado.');
                }
              }
            );
  }

  onSubmit(): void{
    console.log(this.editForm.value)
  //   this.http.post(`https://ancient-wave-65748.herokuapp.com/university`, teste)
  //           .subscribe(
  //             resultado => {
  //               console.log(resultado)
  //             },
  //             erro => {
  //               if(erro.status == 400) {
  //                 console.log(erro);
  //               }
  //             }
  //           );
  // }

  }

  get courses() : FormArray {
    return this.editForm.get("courses") as FormArray
  }

  newCourse(): FormGroup {
   return this.formBuilder.group({
     name: '',
     area: '',
   })
  }
  
  addCourses(): void{
    this.courses.push(this.newCourse());
  }

  addCoursesTable(): void{
    this.table = this.editForm.get('courses')?.value
    console.log(this.table)
  }
  
}
