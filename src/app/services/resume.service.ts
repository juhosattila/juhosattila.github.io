import { Injectable } from '@angular/core';
import { Competition } from '../models/competition.type';
import { Language } from '../models/foreign-language.type';
import { Job } from '../models/job.type';
import { ProgrammingLanguage } from '../models/programming-language.type';
import { School, SummerSchool } from '../models/school.type';
import resume from '../../assets/json-data/resume.json'

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getJobs(): Job[] {
    return resume.workingExperience
  }
  getSchools(): School[] {
    return resume.education
  }
  getSummerSchools(): SummerSchool[] {
    return resume.summerSchools
  }
  getCompetitions(): Competition[] {
    return resume.competitions
  }
  getLanguages(): Language[] {
    return resume.languages
  }
  getProgrammingLanguages(): ProgrammingLanguage[] {
    return resume.programmingLanguagesAndTech
  }
  getSoftware(): string[] {
    return resume.software
  }
}
