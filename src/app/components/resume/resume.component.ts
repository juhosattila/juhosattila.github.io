import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/models/competition.type';
import { Language } from 'src/app/models/foreign-language.type';
import { Job } from 'src/app/models/job.type';
import { ProgrammingLanguage, Level } from 'src/app/models/programming-language.type';
import { School, SummerSchool } from 'src/app/models/school.type';
import { ResumeService } from 'src/app/services/resume.service';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  constructor(private resumeService: ResumeService, private aboutService: AboutService) { }

  cv: string = "assets/pdf/cv.pdf"
  github: string
  linkedin: string
  scholar: string
  twitter: string
  languages: Language[]
  programmingLanguages: ProgrammingLanguage[]
  technologies: string[]
  software: string[]
  competitions: Competition[]
  summerSchools: SummerSchool[]
  schools: School[]
  jobs: Job[]

  ngOnInit(): void {
    this.github = this.aboutService.getGithub()
    this.linkedin = this.aboutService.getLinkedin()
    this.scholar = this.aboutService.getScholar()
    this.twitter = this.aboutService.getTwitter()

    this.languages = this.resumeService.getLanguages()
    this.programmingLanguages = this.resumeService.getProgrammingLanguages()
    this.software = this.resumeService.getSoftware()
    this.competitions = this.resumeService.getCompetitions()
    this.summerSchools = this.resumeService.getSummerSchools()
    this.schools = this.resumeService.getSchools()
    this.jobs = this.resumeService.getJobs()
  }

  get Level() { return Level }

  isEven(p: ProgrammingLanguage): boolean {
    var index = this.programmingLanguages.indexOf(p)
    return index % 2 == 0 ? true : false
  }

  public downloadCv(){

  }
}
