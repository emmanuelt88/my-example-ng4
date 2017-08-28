import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  title = 'Hello loco';
  pepe = {
    name: 'John'
  };

  textValue = 'pepe text';
  arrayList = ['pepe1', 'pepe2', 'pepe3'];
  constructor() { }

  ngOnInit() {
  }

  myEvent(event){
    console.log(event);
  }
}
