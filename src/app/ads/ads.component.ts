import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  editForm: FormGroup;
  apiURL : any;

  constructor(private formBuilder: FormBuilder, private http : HttpClient) { 
    this.apiURL = 'https://ancient-wave-65748.herokuapp.com';
    this.editForm = this.formBuilder.group({
      nome: ['',  []],
      email: ['', []],
      senha: ['', []],
      address: ['', []],
      total_sutudents: ['',  []],
      content: ['',  []],
      courses: this.formBuilder.array([]),
      students: this.formBuilder.array([]),
      university: this.formBuilder.group({
        nome: ['', []],
        endereco: ['', []]
      })
    })
  }

  ngOnInit(): void {
  }

  create(): void{

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
    // this.table = this.editForm.get('courses')?.value
    // console.log(this.table)
  }

}
