import { Injectable } from '@angular/core';
import research from '../../assets/json-data/research.json'
import { Conference, StudentConference } from '../models/conference.type';
import { Publication } from '../models/publication.type';
import { Research } from '../models/research.type';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor() { }
  
  getResearch(): Research[] {
    return research.research
  }
  getPublications(): Publication[] {
    return research.publications
  }
  getStudentConferences(): StudentConference[] {
    return research.studentConferences
  }
  getConferences(): Conference[] {
    return research.conferences
  }
}
