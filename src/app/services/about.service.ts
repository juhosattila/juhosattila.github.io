import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private introduction: string = "I am Attila Juhos currently a PHD student at University of Tübingen under the guidance of Dr. Wieland Brendel. Previously I obtained an MSc in computer science at Budapest University of Technology and Economics."
  private professionalInterests: string = "Professionally I am interested in theoretical aspects of machine learning, especially in image reconstruction problems."
  private email: string = "juhosattila6@gmail.com"
  private phone: string = "+36 30 332 16 86"
  private github: string = "https://github.com/juhosattila"
  private linkedin: string = "https://hu.linkedin.com/in/attila-juhos-1bb478165"

  constructor() { }

  public getIntroduction(): string {
    return this.introduction;
  }
  public getProfessionalInterests(): string {
    return this.professionalInterests;
  }
  public getEmail(): string {
    return this.email;
  }
  public getPhone(): string {
    return this.phone;
  }
  public getGithub(): string {
    return this.github;
  }
  public getLinkedin(): string {
    return this.linkedin;
  }
}
