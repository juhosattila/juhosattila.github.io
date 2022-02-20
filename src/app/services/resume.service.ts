import { Injectable } from '@angular/core';
import { Competition } from '../models/competition.type';
import { Conference, Publication, StudentConference } from '../models/conference.type';
import { Language } from '../models/foreign-language.type';
import { Job } from '../models/job.type';
import { ProgrammingLanguage } from '../models/programming-language.type';
import { Research } from '../models/research.type';
import { School, SummerSchool } from '../models/school.type';
import { COMPETITIONS, CONFERENCES, JOBS, LANGUAGES, PROGRAMMING_LANGUAGES, PUBLICATIONS, RESEARCH, SCHOOLS, SOFTWARE, STUDENTCONFERENCES, SUMMER_SCHOOLS, TECHNOLOGIES } from './mock-resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getJobs(): Job[] {
    return JOBS
  }
  getResearch(): Research[] {
    return RESEARCH
  }
  getPublications(): Publication[] {
    return PUBLICATIONS
  }
  getSchools(): School[] {
    return SCHOOLS
  }
  getSummerSchools(): SummerSchool[] {
    return SUMMER_SCHOOLS
  }
  getCompetitions(): Competition[] {
    return COMPETITIONS
  }
  getStudentConferences(): StudentConference[] {
    return STUDENTCONFERENCES
  }
  getConferences(): Conference[] {
    return CONFERENCES
  }
  getLanguages(): Language[] {
    return LANGUAGES
  }
  getProgrammingLanguages(): ProgrammingLanguage[] {
    return PROGRAMMING_LANGUAGES
  }
  getTechnologies(): string[] {
    return TECHNOLOGIES
  }
  getSoftware(): string[] {
    return SOFTWARE
  }
}
