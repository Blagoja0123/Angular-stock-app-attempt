import { Component, OnInit } from '@angular/core';
import { user } from 'src/utils/schemas/user.schema';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService) { }
  user: any = null;
  ngOnInit(): void {
    this.user = this.service.loggedUser$.subscribe(value => this.user = value);
  }

}
