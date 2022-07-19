import { Injectable } from '@angular/core';
import about from '../../assets/json-data/about.json'

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() {}

  public getIntroduction(): string {
    return about.introduction;
  }
  public getProfessionalInterests(): string {
    return about.professionalInterests;
  }
  public getLocation(): string {
    return about.location;
  }
  public getEmail(): string {
    return about.email;
  }
  public getPhone(): string {
    return about.phone;
  }
  public getGithub(): string {
    return about.github;
  }
  public getLinkedin(): string {
    return about.linkedin;
  }
  public getScholar(): string {
    return about.scholar;
  }
}
