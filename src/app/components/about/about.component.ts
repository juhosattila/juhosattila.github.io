import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutText: string = "I am Attila Juhos currently a PHD student at University of Tübingen under the guidance of Dr. Wieland Brendel. Previously I obtained an MSc in computer science at Budapest University of Technology and Economics."
  researchText: string = "Professionally I am interested in theoretical aspects of machine learning, especially in image reconstruction problems."
  email: string = "juhosattila6@gmail.com" 
  phone: string = "+36 30 332 16 86"

  constructor() { }

  ngOnInit(): void {
  }

}
