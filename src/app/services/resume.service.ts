import { Injectable } from '@angular/core';
import { Competition } from '../models/competition.type';
import { Language } from '../models/foreign-language.type';
import { Job } from '../models/job.type';
import { Level, ProgrammingLanguage } from '../models/programming-language.type';
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
    var res = resume.programmingLanguagesAndTech
    var prog: ProgrammingLanguage[] = []
    res.forEach(element => {
      var data: ProgrammingLanguage = { name: element.name, level: Level.beginner }
      switch (element.level) {
        case "beginner":
          data.level = Level.beginner
          break;
        case "intermediate":
          data.level = Level.intermediate
          break;
        case "advanced":
          data.level = Level.advanced
          break;
        default:
          console.log("Can't process level of " + element.name)
      }
      prog.push(data)
    });
    return prog
  }
  getSoftware(): string[] {
    return resume.software
  }
}
