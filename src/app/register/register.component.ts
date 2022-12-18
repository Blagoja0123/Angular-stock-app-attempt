import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private service: UserService) { }

  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
    username: '',
    email: '',
    password: '',
  })

  onSubmit(): void{
    this.service.registerUser(this.registerForm.value);
    console.log("Successfully registered as: ", this.registerForm.value);
  }
}
