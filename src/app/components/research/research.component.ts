import { Component, OnInit } from '@angular/core';
import { Conference, StudentConference } from 'src/app/models/conference.type';
import { Publication } from 'src/app/models/publication.type';
import { Research } from 'src/app/models/research.type';
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html'
})
export class ResearchComponent implements OnInit {

  constructor(private researchService: ResearchService) { }
  
  publications: Publication[]
  research: Research[]  
  conferences: Conference[]
  studentConferences: StudentConference[]

  ngOnInit(): void {    
    this.conferences = this.researchService.getConferences()
    this.studentConferences = this.researchService.getStudentConferences()    
    this.publications = this.researchService.getPublications()
    this.research = this.researchService.getResearch()
  }

}
