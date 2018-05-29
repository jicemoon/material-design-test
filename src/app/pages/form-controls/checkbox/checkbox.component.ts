import { Component, OnInit } from '@angular/core';

class User {
  constructor(public name: string, public gender: number, public id: number) {}
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  users: User[] = [
    new User('John', 0, 100),
    new User('Max', 1, 101),
    new User('Carl', 0, 102),
    new User('Finch', 0, 103),
  ];

  selectedUser: User[] = [this.users[1]];
  constructor() {}

  ngOnInit() {}
  checkboxChanged(user: User) {
    const idx = this.selectedUser.indexOf(user);
    if (idx > -1) {
      this.selectedUser.splice(idx, 1);
    } else {
      this.selectedUser.push(user);
    }
    console.log(this.selectedUser);
  }
}
