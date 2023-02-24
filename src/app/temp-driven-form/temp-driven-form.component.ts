import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.scss']
})
export class TempDrivenFormComponent {
  @ViewChild('myForm') myForm !:NgForm;
  defaultCourse='Angular';
  userName:string="";
  submitted=false;
  genders=[
    {id:'1', value:'Male'},
    {id:'2',value:'Female'}
  ]
  defaultGender='Male';
  formData={
    username:'',
    email:'',
    course:'',
    gender:''
  }
  onFormSubmit(){
    console.log(this.myForm)
    this.submitted=true;
    this.formData.username=this.myForm.value.userDetail.username;
    this.formData.email=this.myForm.value.userDetail.email;
    this.formData.course=this.myForm.value.course;
    this.formData.gender=this.myForm.value.gender;
    this.myForm.reset();
  }
  setUsername(){
    // this.myForm.setValue({
    //   userDetail: {
    //     username:'Uxtrendz',
    //     email: ''
    //   },
    //   course:'Angular',
    //   gender:'Male'
    // })
    this.myForm.form.patchValue({
      userDetail:{
        username:'Uxtrendz'
      }
    })
  }
}
