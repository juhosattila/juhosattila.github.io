import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  email: string = "juhosattila@gmail.com" 
  phone: string = "+36 30 123 45 67"

  constructor() { }

  ngOnInit(): void {
  }

}
