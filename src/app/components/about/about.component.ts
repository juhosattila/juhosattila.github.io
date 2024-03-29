import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  aboutText: string
  researchText: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutText = this.aboutService.getIntroduction();
    this.researchText = this.aboutService.getProfessionalInterests();
    this.location = this.aboutService.getLocation();
    this.email = this.aboutService.getEmail();
    this.phone = this.aboutService.getPhone();
    this.github = this.aboutService.getGithub();
    this.linkedin = this.aboutService.getLinkedin();
  }
}
