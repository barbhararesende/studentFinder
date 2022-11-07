import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  formAds = new FormGroup({
    total_sutudents: new FormControl('',{}),
    content: new FormControl('',{}),
    courses:  new FormControl({
      name:['',{} ],
      area:['',{} ],
    }),
    students: new FormControl({
      name:['',{} ],
      email:['',{} ],
      interest:['',{}],
    }),
    university: new FormControl({
      name:['',{} ],
      email:['',{} ],
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

  ads(): void{
    
  }

}