import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { StudentService } from './student.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  editForm: FormGroup;
  editForm2: FormGroup;
  apiURL : any;
  table: any;
  student: any;

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private StudentService: StudentService) { 
    //this.apiURL = 'https://ancient-wave-65748.herokuapp.com';
    this.apiURL = 'http://127.0.0.1:8000';
    this.editForm = this.formBuilder.group({
      name: ['',  []],
      email: ['', []],
      senha: ['', []],
      address: ['', []],
      courses: this.formBuilder.array([])
    })

    this.editForm2 = this.formBuilder.group({
      total_students: [0,  []],
      content: ['',  []],
      courses: this.courses,
      student: this.formBuilder.array([]),
      university: this.formBuilder.array([])
    })
  }
  
  async ngOnInit(): Promise<void> {
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    const options: any = { headers: headers };
    
    this.http.get(`${ this.apiURL }/university`, options)
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

            this.student = await this.StudentService.getStudent('tecnologia').toPromise();
            console.log(this.student)
  }

  onSubmit(): void{
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    const options: any = { headers: headers };
    console.log(this.editForm2.value)
    // this.http.post(`${ this.apiURL }/university`, this.editForm.value)
    //         .subscribe(
    //           resultado => {
    //             console.log(resultado)
    //           },
    //           erro => {
    //             if(erro.status == 400) {
    //               console.log(erro);
    //             }
    //           }
    //         );

  }

  // getStudents(): void {
  //   this.StudentService.getStudent('tecnologia')?.subscribe(data) => {  console.log((data)) });
  //   // console.log(this.StudentService.getStudent('tecnologia'))
  //   // this.student = await this.StudentService.getStudent('tecnologia');
  // }

  onSubmit2(): void{
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    const options: any = { headers: headers };
    // this.editForm2.setValue({student: this.student})
    console.log(this.editForm2.value)

    this.teste()
    // this.http.post(`${ this.apiURL }/ads`, this.editForm2.value)
    //         .subscribe(
    //           resultado => {
    //             console.log(resultado)
    //           },
    //           erro => {
    //             if(erro.status == 400) {
    //               console.log(erro);
    //             }
    //           }
    //         );
  

  }


  get courses() : FormArray {
    return this.editForm.get("courses") as FormArray
  }

  get university() : FormArray {
    return this.editForm2.get("university") as FormArray
  }

  teste(): void{
    console.log(this.student)
  }

  newCourse(): FormGroup {
   return this.formBuilder.group({
     name: '',
     area: '',
   })
  }

  newUniversity(): FormGroup {
    return this.formBuilder.group({
      name: '',
      email: '',
    })
   }

  addUniversity(): void{
    this.university.push(this.newUniversity());
  }
  
  addCourses(): void{
    this.courses.push(this.newCourse());
  }

  addCoursesTable(): void{
    this.table = this.editForm.get('courses')?.value
    console.log(this.table)
  }
  
}
  