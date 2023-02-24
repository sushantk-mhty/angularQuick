import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  
  myReactiveForm:FormGroup;
  formStatus:any;
  notAllowedNames=['Uxtrendz','Anup'];
  genders=[
    {id:'1', genderType:'Male'},
    {id:'2', genderType:'Female'}
  ]
  ngOnInit(){
    this.myReactiveForm=new FormGroup({
      'userDetail':new FormGroup({
        'username' : new FormControl(null,[Validators.required,this.NaNames.bind(this)]),
        //'email': new FormControl(null,[Validators.required,Validators.email]),
        'email': new FormControl(null,[Validators.required,Validators.email],<AsyncValidatorFn>this.NaEmails.bind(this)),
        //'email': new FormControl(null,[Validators.required,Validators.email],this.NaEmails.bind(this) as AsyncValidatorFn),
      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills':new FormArray([
        new FormControl(null,Validators.required)
      ])
    });
    // this.myReactiveForm.valueChanges.subscribe(
    //   (value)=>console.log(value)
    // )
    this.myReactiveForm.statusChanges.subscribe(
      (status)=>{console.log(status)
                  this.formStatus=status
      }
    );
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //   'userDetail':{
    //      'username':'abc',
    //      'email':'abc@abc.com'
    //   },
    //   'course':'React',
    //   'gender':'Male',
    //   'skills':[
    //     'Photoshop'
    //   ]
    // })
    // }, 2000);
    setTimeout(() => {
      this.myReactiveForm.patchValue({
      'userDetail':{
         'email':'abc@abc.com'
      },
    })
    }, 2000);
  }
  onSubmit(){
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({
      'userDetail':{
             'username':'',
             'email':''
          },
          'course':'Angular',
          'gender':'Male',
          'skills':[
            ''
          ]
    });
  }
  onAddSkills(){
    const boxcontrol = new FormControl(null,Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(boxcontrol);
  }
  NaNames(control:FormControl){
     if(this.notAllowedNames.indexOf(control.value)!=-1){
      return {'nameIsNotAllowed':true}
     }
     return null;
  }
  NaEmails(control:FormControl): Promise<any> | Observable<any>{
      const myResponse=new Promise<any>((resolve,reject)=>{
        setTimeout(() => {
          if(control.value==='uxtrendz@gmail.com'){
            resolve({'emailNotAllowed':true})
          }else{
            resolve(null)
          }
        }, 3000);
      })
      return myResponse;
  }
}
