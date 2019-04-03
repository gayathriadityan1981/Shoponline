import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'cm-username',
  template:` <p>{{username}}</p>

  `,
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  @Input() username: string; 

  @Output() countUsername = new EventEmitter();
  ngOnInit() {
  }
  updateUsername() { 
    this.username = "gayathri"; 
    this.countUsername.emit(this.username); 
  } 

}
