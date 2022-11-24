import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private formBuilder: FormBuilder,
  ) {}


  title = 'cse412App';
  years = ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']


  playerForm = this.formBuilder.group({
    name: '',
    college: '',
    year: ''
  });

  onSubmit(): void {
    // Process checkout data here
    console.log('Your query has been submitted', this.playerForm.value.name);
    
    //this.playerForm.reset();
  }
}
