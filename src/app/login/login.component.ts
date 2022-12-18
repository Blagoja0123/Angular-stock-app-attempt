import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, public formBuilder: FormBuilder) { }

  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  })

  user$: any;

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.service.loginUser(this.loginForm.getRawValue());
  }
} 
