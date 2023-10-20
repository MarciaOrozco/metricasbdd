import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email:['',[Validators.required]],
      password:['',Validators.required]
    });
  }

  public submit(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }
    if(!this.authService.login(this.myForm.value["email"],this.myForm.value["password"])){
      console.log('error')
    }else{
        this.router.navigateByUrl("/proyectos");
    }
  }

  public get f():any{
    return this.myForm.controls;
  }
}
