import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  aboutText: string;
  researchText: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  scholar: string;
  twitter: string;
  fullEmail: string;
  emailCopied: boolean = false;
  

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.github = this.aboutService.getGithub();
    this.linkedin = this.aboutService.getLinkedin();
    this.scholar = this.aboutService.getScholar();
    this.twitter = this.aboutService.getTwitter();

    this.aboutText = this.aboutService.getIntroduction();
    this.researchText = this.aboutService.getProfessionalInterests();
    this.location = this.aboutService.getLocation();
    this.email = this.aboutService.getEmail();
    this.phone = this.aboutService.getPhone();
    this.github = this.aboutService.getGithub();
    this.linkedin = this.aboutService.getLinkedin();

    this.fullEmail = this.email;
    this.fullEmail = this.fullEmail.replace(/@/g, " at ").replace(/\./g, " dot ");
  }

  public copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.emailCopied = true;
      setTimeout(() => {
        this.emailCopied = false;
      }, 4000);
    }).catch(err => {
      console.error('Could not copy email');
      this.emailCopied = false;
    });
  }
}
