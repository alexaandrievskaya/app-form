import { Component, OnInit } from '@angular/core';
import {User} from '../user.class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model: User = new User(1, '', '', null);
  roles: string[] = ['Guest', 'Moderator', 'Administrator'];

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic(): string {
    return JSON.stringify(this.model);
  }

  errorsLog(err): void {
    console.log(err);
  }

}
